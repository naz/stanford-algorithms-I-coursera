var digraphReader = require('./digraph-reader').graphFromFile,
    kosaraju = require('./kosaraju');

var digraph = digraphReader(__dirname + '/SCC.txt');
var sccs = kosaraju(digraph);

console.log('Strongly Connected components:');
console.log(sccs);
