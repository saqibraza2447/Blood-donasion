
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./modules/user/user.route.js";
import bloodrouter from "./modules/BloodRequest/blood.route.js";
import findrouter from "./modules/Findblood/find.route.js";
import databaseconaction from "./shared/config/batabaseconaction.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use(async (req, res, next) => {
  try {
    await databaseconaction();
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

app.use("/users", userRouter);
app.use("/userlogin", userRouter);
app.use("/bloodrequest", bloodrouter);
app.use("/findboner", findrouter);



app.listen(4000, () => {
  console.log("Server running");
});
export default app;
