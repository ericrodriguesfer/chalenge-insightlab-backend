const express = require("express");
const userController = require("../controllers/user");

const user = express.Router();

user.get("/", userController.list);
user.post("/", userController.create);
user.post("/login", userController.login);
user.post("/event/:id", userController.participate);

module.exports = user;
