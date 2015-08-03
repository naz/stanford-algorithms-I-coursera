var DFSFinishTime = require('./dfs-finish-time'),
  DFSWithMagicOrder = require('./dfs-with-magic-order');

var kosaraju = function(digraph) {
  // create GRev as a reversed graph of original input
  // run DFS on GRev (computes 'magical ordering of the graph')
  // run DFS on original Graph G (discovers SCC using 'magical ordering')

  var G = digraph;
  var GRev = digraph.reverse();

  //console.log(G.getGraph());
  //console.log(GRev.getGraph())
  console.log('starting 1st step: calculating finishing times');
  var magicOrder = new DFSFinishTime().run(GRev);
  console.log('starting 2nd step: dfs with magic order');
  var sccsParams = new DFSWithMagicOrder(G, magicOrder).run();

  return sccsParams;
};

var extractSCSs = function(total, mapping) {
  var counts = [];

  for (var i = 0; i < total; i++) {
    var sccCount = 0;
    for (var j = 0; j < mapping.length; j++) {
      if (mapping[j] === i) {
        sccCount += 1;
      }
    }

    counts.push(sccCount);
  }

  return counts;
};

module.exports = kosaraju;
