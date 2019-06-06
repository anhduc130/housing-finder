const express = require("express")
const app = express();
const mysql = require("mysql");

app.use(express.static("public"));

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/images", express.static(__dirname + "/public/images"));

/**
 * Set up server
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

app.get("/housing-options", function (request, response) {
  response.send("GET housing-options endpoint");
});

app.get("/housing-options/:housingId", function (request, response) {
  response.send("GET housing-options/housingId endpoint");
});

app.post("/housing-options", function (request, response) {
  response.send("POST housing-options endpoint");
});

app.post("/signup", function (request, response) {
  response.send("POST signup endpoint");
});

app.post("/signin", function (request, response) {
  response.send("POST signin endpoint");
});
