import userModel from "./user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function registration(req, res) {
    let { name, email, phone, bloodGroup, city, password, role } = req.body

    let existingEmail = await userModel.findOne({ email: email })

    if (existingEmail) {
        return res.json({
            success: false,
            msg: "The user on this email is already present"
        })
    }

    if (role == "admin") {
        let existingAdmin = await userModel.findOne({ role: "admin" })

        if (existingAdmin) {
            return res.json({
                success: false,
                msg: "The one admin is already present."
            })
        }
    }

    await userModel.create({
        name,
        email,
        password,
        role,
        phone,
        bloodGroup,
        city

    })

    return res.json({
        success: true,
        msg: "The api is working"
    })


    let hashPassword = await bcrypt.hash(password, 10)


    let storedData = await userModel.create({
        name,
        email,
        password: hashPassword,
        bloodGroup,
        phone,
        city,
        role
    })


    let tokenData = {
        id: storedData._id,
        role: storedData.role
    }
    let token = jwt.sign(tokenData, "1234")
    res.cookie("blood_donation", token)



}


export async function getAllRequest(req, res) {
    let dataobj = req.body;

    let bloodrequests = await userModel.find(dataobj);

    return res.json({
        success: true,
        msg: "The api is working",
        bloodrequests: bloodrequests
    });
}


export async function login(req, res) {
    let { email, password, role } = req.body


    let existingData = await userModel.findOne({ email, role })
    if (!existingData) {
        return res.json({ success: true, msg: "The email or role is not correct" })
    }

    let existingDataHashPassword = existingData.password
    let result = await bcrypt.compare(password, existingDataHashPassword)
    console.log("result", result)
    if (!result) {
        return res.json({ success: true, msg: "The password is not correct" })
    }


    let tokenData = {
        id: existingData._id,
        role: existingData.role
    }
    let token = jwt.sign(tokenData, "1234")
    res.cookie("blood_donation", token)





    return res.json({ success: true, msg: "The user is login" })
}



export const getRequestById = async (req, res) => {
    try {
        const { id } = req.params;

        const request = await BloodRequest.findById(id);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Blood request not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Blood request found",
            data: request,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};



export async function userCheck(req, res) {
    let token = req.cookie["blood_donation"]
    if (!token) {
        return res.json({ success: false, msg: "The token is not found" })
    }


    let data = jwt.verify(token, "1234")
    if (!data) {
        return res.json({ success: false, msg: "The data is not found" })
    }



    if (data.role !== "user") {
        return res.json({
            success: false, msg: "The loggedIN user is not admin"
        })
    }



    return res.json({ success: true, msg: "The user is correctly login" })




}


