const UserModel = require('../Models/UserModel');

// create user
const CreateUser = async (req, res) => {
    const {
        userName,
        email,
        pNumber,
        password
    } = req.body;

    try {
        const userDetails = new UserModel({
            userName,
            email,
            pNumber,
            password
        })

        return await userDetails.save().then((value) => {
            return res.status(200).json({ ID: value._id });
        }).catch((err) => {
            return res.status(500).json({ err });
        })
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

// get user details
const GetUserDetails = async (req, res) => {
    try {
        const UserDetail = await UserModel.find().sort({ createdDate: -1 });;
        return res.status(200).send({ UserDetail });
    } catch (err) {
        console.log("error:> ")
        return res.status(500).send("Server Error");
    }
}

module.exports = {
    CreateUser,
    GetUserDetails
}