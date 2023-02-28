import mongoose from "mongoose";

const { MONGO_URI } = process.env;

mongoose.set("strictQuery", true);

export async function connection() {
  if (MONGO_URI != undefined) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log("Connected to DB");
    } catch (err) {
      console.log(err);
    }
  }
}
