import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import User from "../models/userModel.js";

const bcryptSalt = await bcrypt.genSalt(10);

const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

export async function createUser(req, res) {
  const { username, email, password, passwordConfirm } = req.body;

  // validate user input
  if (!(email && password && username && passwordConfirm)) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const usedUsername = await User.findOne({ username });
  if (usedUsername) {
    return res.status(409).json({ error: "Username is already used." });
  }

  if (!validator.isAlphanumeric(username)) {
    return res
      .status(400)
      .json({ error: "Username must only contain alphanumeric characters." });
  }

  if (
    !validator.isLength(username, {
      min: 4,
      max: 16,
    })
  ) {
    return res
      .status(400)
      .json({ error: "Username must contain between 4 and 16 characters." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid." });
  }

  const usedEmail = await User.findOne({ email });
  if (usedEmail) {
    return res.status(409).json({ error: "Email is already used." });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({
      error:
        "Password must contain at least 8 character including at least a lowercase and a uppercase letter, a number and a symbol",
    });
  }

  if (!validator.equals(password, passwordConfirm)) {
    return res.status(400).json({ error: "Passwords must match." });
  }

  try {
    let encryptedPassword = await bcrypt.hash(password, bcryptSalt);

    // create user in our database
    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    const token = createToken(user._id);
    res.cookie("jwtoken", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
}

export async function loginUser(req, res) {
  const { username, password } = req.body;
  try {
    // validate user input
    if (!(username && password)) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!validator.isAlphanumeric(username)) {
      return res
        .status(400)
        .json({ error: "Username must only contain alphanumeric characters." });
    }
    if (
      !validator.isLength(username, {
        min: 4,
        max: 16,
      })
    ) {
      return res
        .status(400)
        .json({ error: "Username must contain between 4 and 16 characters." });
    }

    // validate if user exist in our database
    const user = await User.findOne({ username }).exec();

    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        const token = createToken(user._id);
        res.cookie("jwtoken", token, {
          httpOnly: true,
          maxAge: maxAge * 1000,
        });
        return res.status(200).json({ user: user._id });
      }
      return res.status(400).json({ error: "Password incorrect." });
    }
    res.status(400).json({ error: "User not found." });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

export const logoutUser = (req, res) => {
  res.cookie("jwtoken", "", { maxAge: 1 }).json(true);
};

export const getProfile = (req, res) => {
  const { jwtoken } = req.cookies;
  if (jwtoken) {
    jwt.verify(jwtoken, process.env.JWT_SECRET, {}, async (err, user) => {
      if (err) throw err;
      const { email, username, id } = await User.findById(user.id);
      res.status(200).json({ email, username, id });
    });
  } else {
    res.status(400).json({ error: "No token in cookies" });
  }
};
