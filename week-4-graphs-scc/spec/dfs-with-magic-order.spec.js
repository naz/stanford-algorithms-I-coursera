var DFS = require('../lib/dfs-with-magic-order'),
    Digraph = require('../lib/digraph');

describe('DFS with magic order', function() {
  it('should return correct sccs for basic graph shown in lectures', function() {
    var graph = new Digraph({
      1: [4],
      2: [8],
      3: [6],
      4: [7],
      5: [2],
      6: [9],
      7: [1],
      8: [5, 6],
      9: [3, 7]
    });

    var magicOrder = {
      1 : 3,
      2 : 5,
      3 : 2,
      4 : 8,
      5 : 6,
      6 : 9,
      7 : 1,
      8 : 4,
      9 : 7
    };

    var result = new DFS(graph, magicOrder).run();

    expect(result).toEqual([ 3, 3, 3 ]);
  });
});
