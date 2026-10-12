import express from "express";
import { createRequest, getAllRequest, } from "./request.controller.js";
import { deletblood } from "../BloodRequest/request.controller.js";
import { updateblood } from "./request.controller.js";


const bloodrouter = express.Router();

bloodrouter.post("/createRequest", createRequest);
bloodrouter.get("/getAllRequest", getAllRequest);
bloodrouter.post("/getdeletblood", deletblood);
bloodrouter.post("/updateblooddoner",updateblood )
// bloodrouter.get("/getRequest/:id", getRequestById);
export default bloodrouter;