var Digraph = require('../lib/digraph');

describe('digraph', function() {
  it('should create an empty digraph', function() {
    var digraph = new Digraph();
    expect(digraph.getGraph()).toEqual({});
  });

  it('should be able to add new vertexes', function() {
    var expectedGraph = {
      1: []
    };
    var digraph = new Digraph();

    digraph.addVertex(1);

    expect(digraph.getGraph()).toEqual(expectedGraph);
    expect(digraph.edges(1)).toEqual({});
  });

  it('should be able to add edges to vertex', function() {
    var digraph = new Digraph();

    digraph.addVertex(1);
    digraph.addEdge(1, 2);

    expect(digraph.edges(1)).toEqual([2]);
  });

  it('should add a new vertex if it does not exist yet', function() {
    var digraph = new Digraph();

    digraph.addEdge(1, 2);

    expect(digraph.edges(1)).toEqual([2]);
  });

  it('should initialize from a given adjacency list graph', function() {
    var digraph = new Digraph({
      1: [2,3],
      2: [3],
      3: [1]
    });

    expect(digraph.getGraph()).toEqual({
      1: [2,3],
      2: [3],
      3: [1]
    });
    expect(digraph.edges(3)).toEqual([1]);
  });

  it('should return a reverse digraph', function(){
    var digraph = new Digraph({
      1: [2,3],
      2: [3],
      3: [1]
    });

    var reversedDigraph = new Digraph({
      1: [3],
      2: [1],
      3: [1,2]
    });

    expect(digraph.reverse().getGraph()).toEqual(reversedDigraph.getGraph());
  });

});
