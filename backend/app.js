
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./modules/user/user.route.js";
import bloodrouter from "./modules/BloodRequest/blood.route.js";
import findrouter from "./modules/Findblood/find.route.js";
import databaseconaction from "./shared/config/batabaseconaction.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL,
    ].filter(Boolean),
    credentials: true,
  })
);

// Connect to database before handling requests
app.use(async (req, res, next) => {
  try {
    await databaseconaction();
    next();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

// API routes
app.use("/users", userRouter);
app.use("/userlogin", userRouter);
app.use("/bloodrequest", bloodrouter);
app.use("/findboner", findrouter);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LifeDrop API is running",
  });
});

// Vercel serverless export
export default app;
