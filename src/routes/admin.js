const express = require("express");
const adminController = require("../controllers/admin");
const eventController = require("../controllers/event");
const adressController = require("../controllers/adress");

const admin = express.Router();

admin.get("/", adminController.list);
admin.post("/", adminController.create);
admin.post("/login", adminController.login);
admin.get("/adress", adressController.listAdress);
admin.post("/adress", adressController.createAdress);
admin.get("/event", eventController.listEvent);
admin.get("/event/:id", eventController.getEvent);
admin.post("/event", eventController.createEvent);
admin.put("/event/:id", eventController.update);
admin.post("/event/assigment/:id", eventController.addAssigmentEvent);
admin.delete("/event/:id", eventController.delete);

module.exports = admin;
