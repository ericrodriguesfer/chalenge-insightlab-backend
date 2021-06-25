const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const connection = require("../config/connection");
const routes = require("../routes/routes");

const core = express();

core.use(cors());
core.use(express.json());
core.use(routes);
core.use(errors());

module.exports = core;
