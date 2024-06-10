const express = require("express");
const UserController = require("../Controllers/UserController");

const UserRoutes = express.Router();

// Create user
UserRoutes.post("/createUser", UserController.CreateUser);

// Get user details
UserRoutes.get('/getUser', UserController.GetUserDetails);


module.exports = UserRoutes;