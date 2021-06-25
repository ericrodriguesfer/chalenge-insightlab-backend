const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    registration: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    login: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model("users", User);
