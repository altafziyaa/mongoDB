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
router.get("/", async (req, res) => {
  try {
    const user = await userModel.find();
    return res.status(200).json({ success: true, user });
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await userModel.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(201).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
