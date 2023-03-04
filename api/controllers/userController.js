import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import UserModel from "../models/user.js";

const bcryptSalt = await bcrypt.genSalt(10);

export async function createUser(req, res) {
  const { username, email, password, passwordConfirm } = req.body;
  // validate user input
  if (!(email && password && username && passwordConfirm)) {
    return res.status(400).send("All fields are required.");
  }

  if (!validator.isAlphanumeric(username)) {
    return res
      .status(400)
      .send("Username must only contain alphanumeric characters.");
  }

  if (
    !validator.isLength(username, {
      min: 4,
      max: 16,
    })
  ) {
    return res
      .status(400)
      .send("Username must contain between 4 and 16 characters.");
  }

  if (!validator.isEmail(email)) {
    return res.status(400).send("Email is not valid.");
  }

  const oldUser = await UserModel.findOne({ email });
  if (oldUser) {
    return res.status(409).send("Email is already used.");
  }

  if (!validator.isStrongPassword(password)) {
    return res
      .status(400)
      .send(
        "Password must contain at least 8 character including at least a lowercase and a uppercase letter, a number and a symbol"
      );
  }

  if (!validator.equals(password, passwordConfirm)) {
    return res.status(400).send("Passwords must match.");
  }

  try {
    let encryptedPassword = await bcrypt.hash(password, bcryptSalt);

    // create user in our database
    const user = await UserModel.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    // validate user input
    if (!(email && password)) {
      res.status(400).send("All fields are required");
    }
    if (!validator.isEmail(email)) {
      return res.status(400).send("Email is not valid.");
    }

    // validate if user exist in our database
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).send("Your are not register.");
    }

    if (user && (await bcrypt.compareSync(password, user.password))) {
      res.status(200).json(user);
    } else res.status(400).send("Invalid Credentials");
  } catch (err) {
    res.status(400).json(err);
  }
}
