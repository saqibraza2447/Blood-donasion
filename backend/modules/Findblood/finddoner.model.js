
import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
  bloodGroup: String,
  priority:String,
  phone:Number,
  requiredUnits:Number,
  requiredDate:String,
  reason:String,
});

const FindBloodModel = mongoose.model("Find_blood", bloodSchema);

export default FindBloodModel;
