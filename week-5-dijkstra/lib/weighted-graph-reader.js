var fs = require('fs');

var readFromFile = function(path) {
  var vertexRows = fs.readFileSync(path).toString().trim().split(/\r?\n/);
  var weightedAdjList = {};

  for (var i = 0; i < vertexRows.length; i++) {
    var tokens = vertexRows[i].split('\t');
    var vertexKey = tokens[0];
    var vertexEdges = {};
    for (var j = 1; j < tokens.length; j++) {
      var edge = tokens[j].split(',');
      if (edge[0]) {
        vertexEdges[edge[0]] = parseInt(edge[1]);
      }
    }

    weightedAdjList[vertexKey] = vertexEdges;
  }

  return weightedAdjList;
};

module.exports = readFromFile;
