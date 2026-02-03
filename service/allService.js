import express from "express";
import userModel from "./userModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = userModel.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
