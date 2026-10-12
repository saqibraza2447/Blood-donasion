import express from "express";
import cors from "cors";
import router from "./modules/user/user.route.js";
import databaseconaction from "./shared/config/batabaseconaction.js";
import cookieParser from "cookie-parser";
import login from './modules/user/user.route.js'
import bloodrouter from './modules/BloodRequest/blood.route.js'
import userRouter from './modules/user/user.route.js'
import findrouter from './modules/Findblood/find.route.js'


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.use("/users", router);
app.use("/userlogin", login)
app.use("/bloodrequest", bloodrouter);
app.use("/users", userRouter);
app.use("/findboner", findrouter)





try {
  await databaseconaction();

  app.listen(4000, function () {
    console.log("Server is running on port 4000");
  });
} catch (error) {
  console.error("Server startup failed:", error.message);
  process.exitCode = 1;
}