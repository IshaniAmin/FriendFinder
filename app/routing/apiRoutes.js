// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// path is a built in npm package

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));




app.get("/api/friends", function(req, res) {
  res.json(res);
});


app.post("/api/friends", function(req, res) {
  var newPerson = req.body;

  console.log(newPerson);

  res.json(newPerson);
});