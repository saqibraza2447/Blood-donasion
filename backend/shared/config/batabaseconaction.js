import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function databaseconaction() {
  if (!process.env.database_url) {
    throw new Error("database_url is not configured");
  }

  try {
    await mongoose.connect(process.env.database_url, {
      serverSelectionTimeoutMS: 10000
    });

    console.log("The db is connected successfully");
  } catch (error) {
    console.error("Database error:", error.message);
    throw error;
  }
}

export default databaseconaction;