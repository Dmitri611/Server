const express = require("express");
const app = express();

app.use(express.static(__dirname));
app.use(function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});
app.get("/script.js", function (req, res) {
  res.sendFile(__dirname + "/" + "script.js");
});




app.listen(3000);
