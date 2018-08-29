

// This is a reference to the friendsList array of friend objects. Not sure yet where it's needed, but it needs to exist.
var friends = require("../data/friends.js");



module.exports = function (server) {

    server.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    server.post("/api/friends", function (req, res) {
        res.json(friends);
        console.log("We've pushed new data up to the friends data.")
    });
};






