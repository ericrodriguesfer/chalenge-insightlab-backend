const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Assigment = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    theme: {
      type: Number,
      required: true,
    },
    dutarion: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("assigments", Assigment);
