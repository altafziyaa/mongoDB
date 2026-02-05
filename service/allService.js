import mongoose from "mongoose";
import User from "./userModel.js";

//  CREATE USER (Junior → Mid)
export const createUser = async (data) => {
  if (!data.name || !data.email) {
    throw new Error("Name and email required");
  }

  // duplicate email handling (senior thinking)
  const exists = await User.findOne({ email: data.email });
  if (exists) {
    throw new Error("Email already exists");
  }

  return await User.create(data);
};

//  GET ALL USERS (Performance aware)
export const getUsers = async () => {
  return await User.find().lean(); // lean = senior habit
};

//  GET USER BY ID (Real handling)
export const getUserById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid user id");
  }

  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

//  DELETE USER (Correct logic)
export const deleteUserById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid user id");
  }

  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new Error("User not found");
  }

  return true;
};
