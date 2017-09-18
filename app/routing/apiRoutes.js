var friends = require('../data/friends');

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var user = req.body;
    var matches = [];

    var bestMatch = friends[0];
    var totalDifference = calculateTotalDifference(user.scores, friends[0].scores);
    var bestScore = totalDifference;

    for (var i = 1; i < friends.length; i++) {
      totalDifference = calculateTotalDifference(user.scores, friends[i].scores);
      if (totalDifference < bestScore) {
        bestMatch = friends[i];
        bestScore = totalDifference;
      }
    }

    res.json(bestMatch);
  });

  function calculateTotalDifference(array1, array2) {
    var total = array1.map(function(num, idx) {
      return Math.abs(num - array2[idx]);
    });
    return total.reduce(function(sum, value) {
      return sum + value;
    });
  }

};
