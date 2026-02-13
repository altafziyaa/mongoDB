import express from "express";
import connectDB from "./service/db.js";
import { User } from "./service/userModel.js";

const app = express();
app.use(express.json());
app.use("/users", (isAdmin = (req, res) => {}));

app.post("/users", async (req, res) => {
  try {
    const user = await User.create({
      name: "Aman",
      email: "aman@gmail.com",
      age: 22,
      role: "admin",
    });
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

connectDB();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
