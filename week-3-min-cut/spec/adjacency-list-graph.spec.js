var graph = require('../lib/adjacency-list-graph');

describe('Adjacency list graph', function() {
  it('should return graph assigned in constructor', function() {
    var inputAdjacencyGraph = {
      1: [2, 3, 4],
      2: [1, 4],
      3: [1],
      4: [2, 1]
    };

    var adjGraph = new graph(inputAdjacencyGraph);
    expect(adjGraph.getGraph()).toEqual(inputAdjacencyGraph);
  });

  it('should get list of edges for given vertex', function() {
    var inputAdjacencyGraph = {
      1: [2, 3, 4],
      2: [1, 4],
      3: [1],
      4: [2, 1]
    };

    var adjGraph = new graph(inputAdjacencyGraph);
    expect(adjGraph.getEdges(4)).toEqual([2,1]);
  });

  it('should return a list of available vertexes', function() {
    var adjGrap = new graph({
      1: [2, 3],
      2: [1, 3, 4],
      3: [1, 2, 4],
      4: [2, 3]
    });

    expect(adjGrap.getVertexes()).toEqual([1, 2, 3, 4]);
  });
  /*
   tested graph contraction looks like this
   1--2        1---
   | /|  =>    |\___\
   |/ |        |    2
   3--4        4---/
   */
  it('should contract two vertexes', function() {
    var inputGraph = {
      1: [2, 3],
      2: [1, 3, 4],
      3: [1, 2, 4],
      4: [2, 3]
    };
    var contractedGraph = {
      1: [2, 2, 4],
      2: [1, 1, 4],
      4: [2, 1]
    };
    var adjGraph = new graph(inputGraph);
    adjGraph.contract(1, 3);

    expect(adjGraph.getGraph()).toEqual(contractedGraph);
  });

  it('should contract and remove self loops', function() {
    var inputGraph = {
      1: [2, 3],
      2: [1, 3],
      3: [1, 2, 4, 4],
      4: [3, 3]
    };
    var contractedGraph = {
      1: [2, 2, 4, 4],
      2: [1, 1],
      4: [1, 1]
    };
    var adjGraph = new graph(inputGraph);
    adjGraph.contract(1, 3);

    expect(adjGraph.getGraph()).toEqual(contractedGraph);
  });
});
