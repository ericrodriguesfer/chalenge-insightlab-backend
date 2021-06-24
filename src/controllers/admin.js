const mongoose = require("mongoose");
require("../models/admin");
const Admin = mongoose.model("admins");
const encoder = require("../config/encoderPass");

module.exports = {
  async list(request, response) {
    Admin.find()
      .then((admins) => {
        if (admins.length <= 0) {
          response.send({ message: "No admins registered so far" });
        } else {
          response.send(admins);
        }
      })
      .catch((error) => {
        response.send({ error: "Unexpected error: " + error });
      });
  },

  async create(request, response) {
    const passHashed = encoder(request.body.pass);

    const newAdmin = {
      name: request.body.name,
      email: request.body.email,
      login: request.body.login,
      pass: passHashed,
    };

    new Admin(newAdmin)
      .save()
      .then(() => {
        response.send(newAdmin);
      })
      .catch((error) => {
        response.send({ message: "Error in add new admin: " + error });
      });
  },
};
