var findLargestKey = require('../../utils/find-largest-key');

var DFSWithMagicOrder = function(inputGraph, magicOrder) {
  var digraph = inputGraph;
  var order = magicOrder;
  var count = 0;
  var ids = [];
  var exploredVertexes = {};

  var run = function() {
    var largestKey = findLargestKey(order);
    for (var i = largestKey; i > 0; i--) {
      if (!(exploredVertexes[order[i]] === true)) {
        dfs(digraph, order[i]);
        count += 1;
      }
    }

    return ids.sort(function(a,b){
      return b-a;
    }).slice(0, 5);
  };

  var dfs = function(digraph, vertex) {
    exploredVertexes[vertex] = true;
    if(!ids[count]) ids[count]=0;
    ids[count] = ids[count] + 1;
    var edges = digraph.edges(vertex);
    for(var i=0; i< edges.length; i++){
      if (!(exploredVertexes[edges[i]] === true)) {
        dfs(digraph, edges[i]);
      }
    }
  };

  return {
    run: run
  }
};

module.exports = DFSWithMagicOrder;
