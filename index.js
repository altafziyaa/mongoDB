import connectDB from "./service/db.js";
import express from "express";
import allService from "./service/allService.js";
const app = express();
app.use(express.json());

app.use("/api/users", allService);
connectDB();
app.listen(3000, () => {
  console.log("API Gateway running on port 3000");
});
