const express = require("express");
const admin = require("./admin");
const user = require("./user");

const routes = express.Router();

routes.use("/admin", admin);
routes.use("/user", user);

module.exports = routes;
