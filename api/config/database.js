import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log("Connection to database failed");
    console.error(err);
    process.exit(1);
  }
}
