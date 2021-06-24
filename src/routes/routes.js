const express = require("express");
const admin = require("./admin");

const routes = express.Router();

routes.use("/admin", admin);

module.exports = routes;
