import findrouter from './find.route.js';
import FindBloodModel from './finddoner.model.js'


export async function createfindRequest(req, res) {
    let data = req.body;

    let requestsdata = await FindBloodModel.create(data);

    return res.json({
        success: true,
        msg: "the api is working",
        requestsdata: requestsdata,
    });
}


export async function getAllRequest(req, res) {
    let dataobj = req.body;

    let bloodrequests = await FindBloodModel.find(dataobj);

    return res.json({
        success: true,
        msg: "The api is working",
        bloodrequests: bloodrequests
    });
}


export async function deletblood(req, res) {
    let data = req.body
    await FindBloodModel.findOneAndDelete({ _id: data.id })
    return res.json({ success: true, msg: "The api is working" })
}





