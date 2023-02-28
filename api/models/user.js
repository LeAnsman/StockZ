import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, default: null },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
