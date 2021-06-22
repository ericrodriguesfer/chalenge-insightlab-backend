const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/chalengeinsightlab", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to database was started with success...");
  })
  .catch((error) => {
    console.log("Connectio to database was fail: " + error);
  });

module.exports = mongoose;
