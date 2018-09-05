
// NPM Dependencies:

var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");


// Set up the express server:
var server = express();
var PORT = process.env.PORT || 8080;

// Auto-reference front-side objects:
server.use(express.static("./app/public"));

// Set up data parsing:
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Link to other .js dependencies:
require("./app/routing/apiRoutes.js")(server);
require("./app/routing/htmlRoutes.js")(server);


//////////////////////////////////////////////////////////////
// Initialize server by listening for requests (and verify)://
server.listen(PORT, function () {
    console.log("Server listening on PORT: " + PORT);
});

