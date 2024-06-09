const express = require("express");
const UserController = require("../Controllers/UserController");

const UserRoutes = express.Router();

// Create user
UserRoutes.post("/createUser", UserController.CreateUser);


module.exports = UserRoutes;