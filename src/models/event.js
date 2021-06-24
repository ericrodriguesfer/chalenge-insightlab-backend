const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Event = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: Number,
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
    participants: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: false,
    },
    oclock: {
      type: String,
      required: true,
    },
    date: {
      type: Date(),
      required: true,
    },
    assigments: {
      type: Schema.Types.ObjectId,
      ref: "assigments",
      required: false,
    },
  },
  { timestamps: true }
);

mongoose.model("events", Event);
