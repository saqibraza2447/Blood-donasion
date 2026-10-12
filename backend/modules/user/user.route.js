import express from "express" 
import  {registration} from "./user.controller.js"
import {login} from "./user.controller.js"
import {getAllRequest} from "./user.controller.js"


let router = express.Router()

router.post("/register", registration)
router.post("/login", login)
router.get("/getAllUsers", getAllRequest)
// router.get("/getname/:id", getRequestById)

export default router
