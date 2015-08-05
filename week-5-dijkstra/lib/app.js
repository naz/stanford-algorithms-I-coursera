var dijkstra = require('./dijkstra'),
    reader = require('./weighted-graph-reader');

var graph = reader(__dirname + '/dijkstraData.txt');

console.log('Results:');
console.log('7\t:' + dijkstra(1, 7, graph)["7"].length);
console.log('37\t:' + dijkstra(1, 37, graph)["37"].length);
console.log('59\t:' + dijkstra(1, 59, graph)["59"].length);
console.log('82\t:' + dijkstra(1, 82, graph)["82"].length);
console.log('99\t:' + dijkstra(1, 99, graph)["99"].length);
console.log('115\t:' + dijkstra(1, 115, graph)["115"].length);
console.log('133\t:' + dijkstra(1, 133, graph)["133"].length);
console.log('165\t:' + dijkstra(1, 165, graph)["165"].length);
console.log('188\t:' + dijkstra(1, 188, graph)["188"].length);
console.log('197\t:' + dijkstra(1, 197, graph)["197"].length);
