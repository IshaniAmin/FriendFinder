

var friendsList = require("../data/friends")

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
	  res.json(friendsList);
	});


	app.post("/api/friends", function(req, res) {

		var friendMatch = {
	  		name: "",
	  		photo: "",
	  		difference: 200
	  	}

		var newPerson = req.body;

		var newName = newPerson.name;
		var newPhoto = newPerson.photo;
		var newScore = newPerson.scores;

		var totalDifference;

		for (var i=0; i<friendsList.length-1; i++) {
	  		// console.log(friendsList[i].name);

	  		for(var j = 0; j < 10; j++){
	  			totalDifference += Math.abs(parseInt(newScore[j]) - parseInt(friendsList[i].scores[j]));

	  			if (totalDifference <= friendMatch.difference) {
		  			friendMatch.name = friendsList[i].name;
		  			friendMatch.photo = friendsList[i].photo;
		  			friendMatch.difference = totalDifference;
	  			}
	  		}

	  	}

	friendsList.push(newPerson);
	res.json(friendMatch);

	});

}