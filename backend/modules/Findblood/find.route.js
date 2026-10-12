import express from "express"
import { createfindRequest } from "./find.controller.js"
import { getAllRequest } from './find.controller.js'
import { deletblood } from "./find.controller.js"


let findrouter = express.Router()



findrouter.post("/findblood", createfindRequest)
findrouter.get("/allfind", getAllRequest)
findrouter.post("/getdeletblood",deletblood)



export default findrouter