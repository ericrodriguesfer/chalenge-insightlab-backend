const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      required: true,
    },
    adress: {
      type: Schema.Types.ObjectId,
      ref: "adresses",
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    participants: [
      {
        id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        registration: {
          type: String,
          required: true,
        },
      },
    ],
    oclock: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    assigments: [
      {
        name: {
          type: String,
          required: true,
        },
        theme: {
          type: String,
          required: true,
        },
        dutarion: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

mongoose.model("events", Event);
