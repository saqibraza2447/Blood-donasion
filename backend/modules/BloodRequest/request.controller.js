import BloodRequest from "./request.model.js";

export async function createRequest(req, res) {
    let data = req.body;

    let requestsdata = await BloodRequest.create(data);

    return res.json({
        success: true,
        msg: "the api is working",
        requestsdata: requestsdata,
    });
}

export async function getRequest(req, res) {
    let dataobj = req.body;

    let bloodrquest = await BloodRequest.findOne(dataobj);

    return res.json({
        success: true,
        msg: "The api is working",
        bloodrquest: bloodrquest
    });
}

export async function getAllRequest(req, res) {
    let dataobj = req.body;

    let bloodrequests = await BloodRequest.find(dataobj);

    return res.json({
        success: true,
        msg: "The api is working",
        bloodrequests: bloodrequests
    });
}


export async function deletblood(req, res) {
    let data = req.body;

    await BloodRequest.findOneAndDelete({
        _id: data.id
    });

    return res.json({
        success: true,
        msg: "Blood deleted successfully"
    });
}


export async function updateblood(req, res) {
    let dataObj = req.body
    let objectToFind = {
        _id: dataObj.id
    }

    let dataTofit = {
        ...dataObj
    }


    await BloodRequest.findOneAndUpdate(objectToFind, dataTofit)


    return res.json({ success: true, msg: "THe api is working" })
}










// export const getRequestById = async (req, res) => {
//     try {
//         const { id } = req.params;

//         const request = await BloodRequest.findById(id);

//         if (!request) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Blood request not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: "Blood request found",
//             data: request,
//         });

//     } catch (error) {
//         console.log(error);

//         res.status(500).json({
//             success: false,
//             message: "Server error",
//             error: error.message,
//         });
//     }
// };