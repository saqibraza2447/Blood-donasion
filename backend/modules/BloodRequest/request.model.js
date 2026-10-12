import mongoose from "mongoose";



let bloodRequestSchema = new mongoose.Schema({
    name: String,
    requiredUnits: String,
    bloodGroup: String,
    urgency: String,
    city:String,
    hospitalName:String,
    requiredDate: Date,
    contactNumber: Number,
    notes:String
    
})


let BloodRequest = mongoose.model("BloodRequest", bloodRequestSchema);

export default BloodRequest;