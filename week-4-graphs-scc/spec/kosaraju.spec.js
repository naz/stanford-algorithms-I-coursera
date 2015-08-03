var kosaraju = require('../lib/kosaraju'),
  digraphReader = require('../lib/digraph-reader').graphFromFile;

describe('kosaraju', function() {
  it('sample-1.txt => 3,3,3,0,0', function() {
    var digraph = digraphReader(__dirname + '/sample-1.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([3, 3, 3]);
  });
  it('sample-2.txt => 3,3,2,0,0', function() {
    var digraph = digraphReader(__dirname + '/sample-2.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([3, 3, 2]);
  });
  it('sample-3.txt => 3,3,1,1,0', function() {
    var digraph = digraphReader(__dirname + '/sample-3.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([3, 3, 1, 1]);
  });
  it('sample-4.txt => 7,1,0,0,0', function() {
    var digraph = digraphReader(__dirname + '/sample-4.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([7, 1]);
  });
  it('sample-5.txt => 6,3,2,1,0', function() {
    var digraph = digraphReader(__dirname + '/sample-5.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([6, 3, 2, 1]);
  });

  it('self-loop.txt => 3, 2, 2, 1', function() {
    var digraph = digraphReader(__dirname + '/self-loop.txt');
    var sccs = kosaraju(digraph);
    expect(sccs).toEqual([3, 2, 2, 1]);
  });
});
