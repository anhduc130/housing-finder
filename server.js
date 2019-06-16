const express = require("express")
const app = express();
const mysql = require("mysql");
const createRentalUnit = require("./create-rental-unit")

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));
app.use(express.json());

/**
 * Run server
 */
const server = app.listen(2019, function () {
  const port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});

/**
 * Create DB connection
 */
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 8889,
  database: "housing-finder",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect(function (err) {
  if (err)
    throw err;
  console.log("Connected!");
});

app.get("/rental-units", function (request, response) {
  response.send("GET rental-units endpoint");
});

app.get("/rental-units/:housingId", function (request, response) {
  response.send("GET rental-units/housingId endpoint");
});

app.post("/rental-units", async function (request, response) {
  try {
    createRentalUnit(request.body, connection);
    response.status(201).send("Success: A rental unit inserted");
  } catch (error) {
    response.status(400).send(error);
  }
});

app.post("/signup", function (request, response) {
  try {
    signUp(request.body, connection);
    response.status(201).send("Success: A landlord signed up");
  } catch (error) {
    response.status(400).send(error);
  }
});

app.post("/signin", function (request, response) {
  response.send("POST signin endpoint");
});
