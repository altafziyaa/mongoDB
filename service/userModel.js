import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
    role: { type: String, default: "user" },
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
