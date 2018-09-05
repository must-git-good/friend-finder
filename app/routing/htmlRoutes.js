
var path = require("path");

module.exports = function (server) {

    server.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    server.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    server.get("*", function (req, res) {
        res.json({err: 404});
    });
};
