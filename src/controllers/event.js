const mongoose = require("mongoose");
require("../models/event");
const Event = mongoose.model("events");
require("../models/adress");
const Adress = mongoose.model("adresses");

module.exports = {
  async listEvent(request, response) {
    Event.find()
      .then((events) => {
        if (events.length <= 0) {
          response.send({ message: "No events registered so far" });
        } else {
          response.send(events);
        }
      })
      .catch((error) => {
        response.send({ error: "Unexpected error: " + error });
      });
  },

  async getEvent(request, response) {
    const eventId = request.params.id;

    await Event.findById({ _id: eventId })
      .then(async (event) => {
        Adress.findById({ _id: event.adress })
          .then(async (adress) => {
            event.adress = adress;

            response.send(event);
          })
          .catch((error) => {
            response.send({ error: "Adress this event not found: " + error });
          });
      })
      .catch((error) => {
        response.send({ error: "This event not found: " + error });
      });
  },

  async createEvent(request, response) {
    const newEvent = {
      name: request.body.name,
      theme: request.body.theme,
      adress: request.body.adress,
      type: request.body.type,
      participants: undefined,
      oclock: request.body.oclock,
      date: request.body.date,
      assigments: undefined,
    };

    await new Event(newEvent)
      .save()
      .then((event) => {
        response.send(event);
      })
      .catch((error) => {
        response.send({ message: "Error in add new event: " + error });
      });
  },

  async addAssigmentEvent(request, response) {
    const id = request.params.id;

    const newAssigment = {
      name: request.body.name,
      theme: request.body.theme,
      dutarion: request.body.dutarion,
    };

    await Event.findOneAndUpdate(
      { _id: id },
      { $push: { assigments: newAssigment } },
      { returnOriginal: false }
    )
      .then((event) => {
        response.send(event);
      })
      .catch((error) => {
        response.send({
          message: "Error in adding assigment in event: " + error,
        });
      });
  },

  async update(request, response) {
    const id = request.params.id;

    await Event.findByIdAndUpdate(
      { _id: id },
      {
        name: request.body.name,
        theme: request.body.theme,
        type: request.body.type,
        oclock: request.body.oclock,
        date: request.body.date,
      },
      { returnOriginal: false }
    )
      .then((event) => {
        response.send(event);
      })
      .catch((error) => {
        response.send({
          message: "Error in update event: " + error,
        });
      });
  },

  async delete(request, response) {
    const id = request.params.id;

    await Event.findOneAndDelete({ _id: id })
      .then(() => {
        response.send({
          message: "Event deleted with success",
        });
      })
      .catch((error) => {
        response.send({
          message: "Error in delete event: " + error,
        });
      });
  },
};
