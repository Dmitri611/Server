const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser());

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "studentsbd",
  password: "Velosiped2000",
});
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.get("/style.css", function (req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});

app.get("/script.js", function (req, res) {
  res.sendFile(__dirname + "/" + "script.js");
});

app.get("/main.css", function (req, res) {
  res.sendFile(__dirname + "/" + "main.css");
});

app.get("/main.js", function (req, res) {
  res.sendFile(__dirname + "/" + "main.js");
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/main.html");
});

app.get("/getUsers", async function (req, res) {
  const group = req.query.group;
  const query = `Select * From ${group}`;

  connection.query(query, (err, data) => {
    res.send(data);
  });
});

app.post("/login", function (req, res) {
  let data = req.body;
  const login = "admin";
  const password = "admin";
  if (data.login === login && data.password === password) {
    res.send("true");
  } else {
    res.send("false");
  }
});

//Добавить студента
app.post("/addUser", function (req, res) {
  const { firstName, lastName, subName,group } = req.body;

  const query = `INSERT INTO ${group}(FirstName, LastName, SubName) VALUES ("${firstName}", "${lastName}","${subName}")`;
  connection.query(query);
});

//добавить оценку
app.post("/updateScore", function (req, res) {
  const { subject, score, firstName, lastName, subName,group } = req.body;
  const query = `UPDATE ${group} SET ${subject}="${score}" WHERE FirstName="${firstName}" AND LastName="${lastName}" AND SubName="${subName}"`;
  console.log(query);
  connection.query(query);
});

app.listen(3000);
