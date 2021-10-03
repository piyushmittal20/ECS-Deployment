const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res, next) => {
  let image = await axios("https://source.unsplash.com/random");
  res.send(`<img src="${image.request.res.responseUrl}" />`);
});

app.listen(8080, () => {
  console.log("Server listening on PORT 8080!!");
});
