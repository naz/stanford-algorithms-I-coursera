var digraphReader = require('../lib/digraph-reader');

describe('directed graph reader', function(){
  it('should transform file with sample input to a directed graph', function(){
    // read following input from file
    // 1 1
    // 1 2
    // 2 3
    // 3 4
    var digraph = digraphReader.graphFromFile(__dirname + '/test-digraph.txt');

    expect(digraph.edges(1)).toEqual([1,2]);
  });

  it('should transform file with sample input to a directed graph', function(){
    var digraph = digraphReader.graphFromFile(__dirname + '/SCC.txt');
    var largestKey = digraph.largestVertex();
    expect(largestKey).toEqual(875714);
  });
});
