import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export async function createUser(req, res) {
  try {
    const { username, email, password } = req.body;
    // validate user input
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    let encryptedPassword = await bcrypt.hash(password, 10);

    // create user in our database
    const user = await UserModel.create({
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });

    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    // validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // validate if user exist in our database
    const user = await UserModel.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json(user);
    } else res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
}
