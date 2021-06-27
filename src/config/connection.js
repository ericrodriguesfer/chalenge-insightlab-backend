const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://chalengeinsigthlab:qwe123@insightlabchalenge.kpjg5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connection to database was started with success...");
  })
  .catch((error) => {
    console.log("Connectio to database was fail: " + error);
  });

module.exports = mongoose;

/*
username: chalengeinsigthlab
password: qwe123
*/
