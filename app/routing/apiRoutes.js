var friends = require("../data/friends.js");


module.exports = function (server) {

    server.get("/api/friends", function (req, res) {
            res.json(friends);
            console.log("A GET request has happened related to the following data: " + JSON.stringify(friends, null, 2));
    });

    server.post("/api/friends", function (req, res) {
            friends.push(req.body);
            // res.json({"List_Updated": true});
            console.log("A POST of new data is pushed to /api/friends.");
    });

};
