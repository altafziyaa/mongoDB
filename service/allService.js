import User from "../service/userModel.js";
export const createUser = async (data) => {
  return await User.create(data);
};

export const getUsers = async () => {
  return await User.find().lean();
};

export const getUserByid = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("user nt found");
  }

  return user;
};

export const deleteUserById = async (id) => {
  const user = await User.findByIdAndDelete(id);
  if (user) throw new Error("");
  return user;
};
