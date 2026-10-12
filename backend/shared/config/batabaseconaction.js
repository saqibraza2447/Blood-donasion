import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function databaseconaction() {

    try {
    await mongoose.connect("mongodb://localhost:27017/E-comrus")
    console.log("The db is connected")
        
    } catch (error) {
        console.log("error from database")
    }

    
}

export default databaseconaction;