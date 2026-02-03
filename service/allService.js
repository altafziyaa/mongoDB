import express from "express";
import userModel from "./userModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const user = await userModel.create({ name, email, age });
    res.status(201).json(user);

    // return res.status(201).json({
    //   success: true,
    //   message: "user created",
    //   user,
    // });
    // await user.save();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
