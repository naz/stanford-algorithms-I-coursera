var fs = require('fs'),
  _ = require('lodash'),
  Digraph = require('../lib/digraph');

var graphFromString = function(str) {
  var digraph = new Digraph();
  if (!str) return digraph;

  var splitLines = str.split('\n');

  _.each(splitLines, function(line) {
    var rawLine = line.trim();
    if (rawLine) {
      var vertexEdge = rawLine.split(' ');
      var vertex = parseInt(vertexEdge[0]);
      var edge = parseInt(vertexEdge[1]);
      digraph.addEdge(vertex, edge);
    }
  });

  return digraph;
};

var graphFromFile = function(filePath) {
  return graphFromString(fs.readFileSync(filePath).toString());
};

module.exports = {
  graphFromFile: graphFromFile,
  graphFromString: graphFromString
};

