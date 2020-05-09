var friends = require("../data/friends.js");

module.exports = function(app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for(var i = 0; i < user.scores.length ; i++){
            user.scores[i]= parseInt(user.scores[i]);
        }
        //identifies which friend it is
        var bestFriendIndex = 0;
        //updates based on friend difference
        var bestFriendDifference = 30;

        for (var i =0; i<friends.length ; i++){
            var totDifference = 0;
            
            for (var j = 0; j < friends[i].scores.length; j++){
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totDifference += difference;
            }

            if(totDifference < bestFriendDifference){
                bestFriendIndex = i;
                bestFriendIndex = totDifference;
            }
        }

        friends.push(user);
        res.json(friends[bestFriendIndex]);
    });

};