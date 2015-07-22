var _ = require('lodash'),
  Graph = require('./adjacency-list-graph');

var runKarger = function(adjList) {
  var repeatCoefitient = 3;
  var numberOfRuns = new Graph(_.cloneDeep(adjList)).getVertexes().length * repeatCoefitient,
    minCut = 0;

  for (var i = 0; i < numberOfRuns; i++) {
    var cut = contract(_.cloneDeep(adjList));

    if (i === 0 || cut < minCut) {
      minCut = cut;
    }
  }

  return minCut;
};

var contract = function(adjList) {
  var contractedGraph = randomContraction(new Graph(adjList));
  return contractedGraph.getGraph()[contractedGraph.getVertexes()[0]].length;
};

var randomContraction = function(graph) {
  var totalIterations = (graph.getVertexes().length - 2);

  for (var i = 0; i < totalIterations; i++) {
    var currentVertexes = graph.getVertexes();
    var range = currentVertexes.length;
    var aIndex = Math.floor(Math.random() * range);
    var vertexA = currentVertexes[aIndex];
    var vertexB = getRandomFromSet(graph.getEdges(vertexA));
    graph.contract(vertexA, vertexB);
  }

  return graph;
};

var getRandomFromSet = function(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

module.exports = runKarger;
