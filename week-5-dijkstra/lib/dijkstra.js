var dijkstra = function(start, finish, graph) {
  var X = {}; // processed vertexes
  X[start] = {
    length: 0,
    path: []
  };

  while(!containsVertex(X, finish)) {
    var chosenVertex = getOutgoingEdge(X, graph);
    X[chosenVertex.vertex] = {
      length: chosenVertex.length,
      path: chosenVertex.path
    };
  }

  return X;
};

var containsVertex = function(vertexSet, vertex){
  return !!vertexSet[vertex];
};

var getOutgoingEdge = function(exploredVertexes, graph){
  //console.log('already explored values:');
  //console.log(exploredVertexes);
  //console.log('\n\n');
  var bestLength = null;
  var outgoingVertex = null;
  var path = null;

  for (var vertex in exploredVertexes){
    //console.log('analyzing vertex \t= ' + vertex);
    for(var edge in graph[vertex]){
      //console.log('analyzing edge \t\t= ' + edge);
      if(containsVertex(exploredVertexes, edge)) continue;

      var currentLength = exploredVertexes[vertex].length || 0;

      if(bestLength === null || bestLength > (currentLength + graph[vertex][edge])) {
        bestLength = currentLength + parseInt(graph[vertex][edge]);
        outgoingVertex = edge;
        var pathBefore = exploredVertexes[vertex].path;
        path = pathBefore.concat(parseInt(edge));
        //console.log('adding vertex ' + vertex + ', length: ' + bestLength + 'with current path ' +  exploredVertexes[vertex].path);
      }
    }
  }

  return {
    vertex: outgoingVertex,
    length: bestLength,
    path: path
  };
};

module.exports = dijkstra;
