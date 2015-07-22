var _ = require('lodash');

var AdjacencyListGraph = function AdjacencyListGraph(inputGraph) {
  var graph = inputGraph;

  var contract = function(vertexA, vertexB) {
    var contractedEdges;
    var aEdges = graph[vertexA];
    var bEdges = graph[vertexB];

    delete graph[vertexB];

    contractedEdges = aEdges.concat(bEdges);
    contractedEdges = _.without(contractedEdges, vertexA, vertexB);
    graph[vertexA] = contractedEdges;

    substituteOldVertexWithNewOne(vertexA, vertexB);

    return graph;
  };

  var substituteOldVertexWithNewOne = function(vertexA, vertexB){
    for (var vertex in graph) {
      if (graph.hasOwnProperty(vertex) && graph[vertex].indexOf(vertexB) !== -1) {
        for (var i = 0; i < graph[vertex].length; i++) {
          if (graph[vertex][i] === vertexB) {
            graph[vertex][i] = vertexA;
          }
        }
      }
    }
  };

  var getVertexes = function() {
    var vertexes = [];
    for (var vertex in graph) {
      if (graph.hasOwnProperty(vertex)) {
        vertexes.push(parseInt(vertex));
      }
    }

    return vertexes;
  };

  var getEdges = function(vertex){
    return graph[vertex];
  };

  return {
    contract: contract,
    getVertexes: getVertexes,
    getEdges: getEdges,
    getGraph: function() {
      return graph;
    }
  }
};

module.exports = AdjacencyListGraph;
