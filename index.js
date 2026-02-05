import connectDB from "./service/db.js";
import express from "express";
import routers from "./service/routers.js";
const app = express();
app.use(express.json());
// app.use(body.parser());

app.use("/api/users", routers.createUser);
// app.use("/api/all-users", allService);
// app.use("/api/profile", allService);
// app.use("/api/profile-update", allService);
// app.use("/api/delete-user", allService);
connectDB();
app.listen(3000, () => {
  console.log("server running on port 3000");
});
