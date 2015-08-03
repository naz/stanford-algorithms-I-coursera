var _ = require('lodash');

var Digraph = function(digraph) {
  var graph = digraph || {};
  var largestVertex = 0;

  var getGraph = function() {
    return graph;
  };

  var addVertex = function(vertex) {
    graph[vertex] = [];
  };

  var addEdge = function(vertex, edge) {
    if (!graph[vertex]) {
      graph[vertex] = [];
      if (largestVertex < vertex) largestVertex = vertex;
    }
    graph[vertex].push(edge);
  };

  var edges = function(vertex) {
    return graph[vertex] || [];
  };

  var reverse = function() {
    var reversed = new Digraph();

    for (var vertex in graph) {
      _.each(graph[vertex], function(edge) {
        reversed.addEdge(edge, parseInt(vertex));
      })
    }

    return reversed;
  };

  var getLargestVertex = function(){
    return largestVertex;
  };

  return {
    getGraph: getGraph,
    addVertex: addVertex,
    addEdge: addEdge,
    edges: edges,
    reverse: reverse,
    largestVertex: getLargestVertex
  }
};

module.exports = Digraph;
