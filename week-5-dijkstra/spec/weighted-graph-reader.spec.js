var reader = require('../lib/weighted-graph-reader');

describe("should read adjecency list with weights", function() {
  it("reads from file with weights", function() {
    var expectedGraph = {
      1: {
        2: 100,
        3: 200
      },
      2: {
        3: 1000,
        1: 100
      },
      3: {
        1: 200,
        2: 1000
      }
    };
    // 1 2,100 3,200
    // 2 3,1000 1,100
    // 3 1,200 2,1000
    var graph = reader(__dirname + '/sample-weighted-graph.txt');

    expect(graph).toEqual(expectedGraph);
  });
});
