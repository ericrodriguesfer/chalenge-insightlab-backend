const mongoose = require("mongoose");
require("../models/adress");
const Adress = mongoose.model("adresses");

module.exports = {
  async listAdress(request, response) {
    await Adress.find()
      .then((adress) => {
        if (adress.length <= 0) {
          response.send({ message: "No adress registered so far" });
        } else {
          response.send(adress);
        }
      })
      .catch((error) => {
        response.send({ error: "Unexpected error: " + error });
      });
  },
  async createAdress(request, response) {
    const newAdress = {
      street: request.body.street,
      number: request.body.number,
      district: request.body.district,
      city: request.body.city,
      institution: request.body.institution,
    };

    await new Adress(newAdress)
      .save()
      .then((adress) => {
        response.send(adress);
      })
      .catch((error) => {
        response.send({ message: "Error register adress: " + error });
      });
  },
};
