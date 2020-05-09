//DONE

var express = require("express");
var path = require("path");

var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});