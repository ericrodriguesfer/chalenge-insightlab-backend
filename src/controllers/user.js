const mongoose = require("mongoose");
require("../models/user");
const User = mongoose.model("users");
require("../models/event");
const Event = mongoose.model("events");
const encoder = require("../config/encoderPass");

module.exports = {
  async list(request, response) {
    await User.find()
      .then((users) => {
        if (users.length <= 0) {
          response.send({ message: "No users registered so far" });
        } else {
          response.send(users);
        }
      })
      .catch((error) => {
        response.send({ error: "Unexpected error: " + error });
      });
  },

  async create(request, response) {
    await User.find({ email: request.body.email })
      .then((user) => {
        if (user.length == 1) {
          response.send({ message: "This email register other user" });
        } else if (user.length <= 0) {
          const passHashed = encoder(request.body.pass);

          const newUser = {
            name: request.body.name,
            registration: request.body.registration,
            email: request.body.email,
            login: request.body.login,
            pass: passHashed,
          };

          new User(newUser)
            .save()
            .then((user) => {
              response.send(user);
            })
            .catch((error) => {
              response.send({ message: "Error in add new user: " + error });
            });
        }
      })
      .catch((error) => {
        response.send({ message: "Fail in register user: " + error });
      });
  },

  async login(request, response) {
    const passHashed = encoder(request.body.pass);

    await User.find({ login: request.body.login, pass: passHashed })
      .then((user) => {
        if (user.length == 1) {
          const userLoged = {
            id: user[0]._id,
            name: user[0].name,
            email: user[0].email,
            loged: true,
            user: true,
            admin: false,
          };
          response.send(userLoged);
        } else if (user.length <= 0) {
          const userNoLoged = {
            id: "No loged",
            name: "No loged",
            email: "No loged",
            loged: false,
            user: false,
            admin: false,
          };
          response.send(userNoLoged);
        }
      })
      .catch((error) => {
        response.send({ message: "Fail in login: " + error });
      });
  },

  async participate(request, response) {
    const id = request.params.id;
    const userInfo = {
      id: request.body.id,
      name: request.body.name,
      registration: request.body.registration,
    };

    await Event.findByIdAndUpdate(
      { _id: id },
      { $push: { participants: userInfo } },
      { returnOriginal: false }
    )
      .then((event) => {
        response.send(event);
      })
      .catch((error) => {
        response.send({
          message: "Error in participate in event: " + error,
        });
      });
  },
};
