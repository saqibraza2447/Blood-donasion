
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRouter from "./modules/user/user.route.js";
import bloodrouter from "./modules/BloodRequest/blood.route.js";
import findrouter from "./modules/Findblood/find.route.js";
import databaseconaction from "./shared/config/batabaseconaction.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://blood-donasion-bannu.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "LifeDrop API is running",
  });
});

// API routes
app.use("/users", userRouter);
app.use("/userlogin", userRouter);
app.use("/bloodrequest", bloodrouter);
app.use("/findboner", findrouter);

// Connect to database before API requests
app.use(async (req, res, next) => {
  try {
    await databaseconaction();
    next();
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
    });
  }
});

export default app;
