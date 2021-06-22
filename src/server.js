const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send({ message: "Olá Mundo!" });
});

app.listen(3333, () => {
  console.log("Server application was started...");
});
