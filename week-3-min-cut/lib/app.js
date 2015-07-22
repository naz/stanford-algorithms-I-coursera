var fs = require('fs'),
    listReader = require('./adjacency-list-reader'),
    karger = require('./karger-contraction');

var rawInput = fs.readFileSync('kargerMinCut.txt').toString();
var adjacencyList = listReader(rawInput);
var minCut = karger(adjacencyList);

console.log('The minimal cut is: ' + minCut);
