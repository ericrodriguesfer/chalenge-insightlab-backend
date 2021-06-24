const express = require("express");
const connection = require("../config/connection");
const routes = require("../routes/routes");

const core = express();

core.use(express.json());
core.use(routes);

module.exports = core;
