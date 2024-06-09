const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserModel = Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        pNumber: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }
)

const user = mongoose.model("User", UserModel);
module.exports = user;