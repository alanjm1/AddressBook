require("colors");
var path = require("path");
var express = require("express");
var cors = require("cors");
var people = require(path.join(__dirname, "data/people.json"));

var app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors());

app.use("/mockup/", express.static(path.join(__dirname, "mockup")));
app.get("/api/people", cors(corsOptions), function (req, res) {
  // using res.json() in place of res.end() to send correct content-type header
  res.json(people);
});

app.get("/api/people/:id", cors(corsOptions), function (req, res) {
  var person = people.people.find((p) => p.id === req.params.id);
  res.json(person);
});

var HTTP_PORT = 8080;

app.listen(HTTP_PORT, function (err) {
  if (err) {
    throw err;
  }

  console.log(("HTTP server listening on port " + HTTP_PORT).green);

  console.log("Mockup:".bold + " http://localhost:" + HTTP_PORT + "/mockup/");
  console.log(
    "People data:".bold + " http://localhost:" + HTTP_PORT + "/api/people"
  );
});
