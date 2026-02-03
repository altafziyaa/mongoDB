import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
});

export default mongoose.model("User", userModel);
