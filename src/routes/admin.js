const express = require("express");
const adminController = require("../controllers/admin");

const admin = express.Router();

admin.get("/", adminController.list);
admin.post("/", adminController.create);
admin.post("/login", adminController.login);

module.exports = admin;
