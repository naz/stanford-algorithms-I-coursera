var DFSFinishTime = function() {
  var finishHash = {};
  var exploredVertexes = {};
  var finishTime = 1;
  var dfsFinishTime = function(digraph) {
//    console.log('current digraph:');
//    console.log(digraph.getGraph());
    var largestKey = digraph.largestVertex();
    for (var i = largestKey; i > 0; i--) {

      if (!exploredVertexes[i] === true) {
        //console.log('dfs(' + i + ')');
        dfs(digraph, i);
      }
    }

    return finishHash;
  };

  var dfs = function(digraph, vertex) {
    exploredVertexes[vertex] = true;
    var nodesToVisit = digraph.edges(vertex);

    //while(nodesToVisit.length > 0){
    //  var currentVertex = nodesToVisit[0];
    //  exploredVertexes[currentVertex] = true;
    //  if(currentVertex)
    //  nodesToVisit = nodesToVisit.slice(1);
    //}

    for(var i= 0; i < nodesToVisit.length; i++){
      if (!exploredVertexes[nodesToVisit[i]] === true) {
        //console.log('dfs(' + nodesToVisit[i] + ')');
        dfs(digraph, nodesToVisit[i]);
      }
    }
    //console.log(vertex + ' done');
    //finishTimes.push(vertex);
    finishHash[finishTime] = vertex;
    finishTime +=1;
  };

  return {
    run: dfsFinishTime
  }
};

module.exports = DFSFinishTime;
