import connectDB from "./service/db.js";
import express from "express";
import { User } from "./service/userModel.js";
const app = express();
app.use(express.json());
// app.use(body.parser());
async function createUserPractice() {
  const user = await User.create({
    name: "aman",
    email: "altafziya@gmail.com",
    age: 20,
    role: "admin",
  });

  return user;
}

createUserPractice()
  .then((user) => {
    console.log("User created:", user);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });

connectDB();
app.listen(3000, () => {});
