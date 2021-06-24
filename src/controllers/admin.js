const mongoose = require("mongoose");
require("../models/admin");
const Admin = mongoose.model("admins");
const encoder = require("../config/encoderPass");

module.exports = {
  async list(request, response) {
    await Admin.find()
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
    await Admin.find({ email: request.body.email })
      .then((admin) => {
        if (admin.length == 1) {
          response.send({ message: "This email register other admin" });
        } else if (admin.length <= 0) {
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
        }
      })
      .catch((error) => {
        response.send({ message: "Fail in register admin: " + error });
      });
  },

  async login(request, response) {
    const passHashed = encoder(request.body.pass);

    await Admin.find({ login: request.body.login, pass: passHashed })
      .then((admin) => {
        if (admin.length == 1) {
          const adminLoged = {
            id: admin[0]._id,
            name: admin[0].name,
            email: admin[0].email,
            loged: true,
            user: false,
            admin: true,
          };
          response.send(adminLoged);
        } else if (admin.length <= 0) {
          const adminNoLoged = {
            id: "No loged",
            name: "No loged",
            email: "No loged",
            loged: false,
            user: false,
            admin: false,
          };
          response.send(adminNoLoged);
        }
      })
      .catch((error) => {
        response.send({ message: "Fail in login: " + error });
      });
  },
};
