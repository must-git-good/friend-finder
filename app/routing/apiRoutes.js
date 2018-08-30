

// This is a reference to the friendsList array of friend objects. Not sure yet where it's needed, but it needs to exist.
var friends = require("../data/friends.js");



module.exports = function (server) {

    server.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    server.post("/api/friends", function (req, res) {
        res.json(friends);
        console.log("A POST to /api/friends happened.");
    });

    server.post("/api/new/friend", function (req, res) {
        console.log(req.body);
        addFriend = JSON.stringify(req.body);
        console.log(addFriend);
        addFriend = JSON.parse(addFriend);
        console.log(addFriend);
    });
};






