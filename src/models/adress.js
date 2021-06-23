const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Adress = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("adresses", Adress);
