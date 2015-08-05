var reader = require('../lib/weighted-graph-reader'),
  dijkstra = require('../lib/dijkstra.js');

describe('dijkstra', function() {
  it('should produce correct output for sample-1 graph', function() {
    var sampleFilePath = __dirname + '/sample-1.txt';
    var graph = reader(sampleFilePath);
    var start = 1;
    var finish = 4;

    var expectedResult = {
      1: {
        length: 0,
        path: []
      },
      2: {
        length: 3,
        path: [2]
      },
      3: {
        length: 3,
        path: [3]
      },
      4: {
        length: 5,
        path: [2, 4]
      }
    };

    expect(dijkstra(start, finish, graph)).toEqual(expectedResult);
  });

  it('should produce correct output for sample-2 graph', function() {
    var sampleFilePath = __dirname + '/sample-2.txt';
    var graph = reader(sampleFilePath);
    var start = 1;
    var finish = 4;

    var expectedResult = {
      1: {
        length: 0,
        path: []
      },
      2: {
        length: 3,
        path: [2]
      },
      3: {
        length: 4,
        path: [2, 3]
      },
      4: {
        length: 5,
        path: [2, 4]
      }
    };

    expect(dijkstra(start, finish, graph)).toEqual(expectedResult);
  });

  it('should produce correct output for medium-size graph', function() {
    var sampleFilePath = __dirname + '/medium-size.txt';
    var graph = reader(sampleFilePath);
    var start = 1;
    var finish = 7;

    var expectedLength = 5;

    expect(dijkstra(start, finish, graph)[finish].length).toEqual(expectedLength);
  });

  it('should produce correct output for large-size graph', function() {
    var sampleFilePath = __dirname + '/large-size.txt';
    var graph = reader(sampleFilePath);
    var start = 13;
    var finish = 5;

    var expectedLength = 26;

    expect(dijkstra(start, finish, graph)[finish].length).toEqual(expectedLength);
  });

  it('should produce correct output for xxl-size graph', function() {
    var sampleFilePath = __dirname + '/xxl-size.txt';
    var graph = reader(sampleFilePath);
    var start = 28;
    var finish = 6;

    var expectedLength = 9;
    var expectedPath = [16, 6];

    expect(dijkstra(start, finish, graph)[finish].length).toEqual(expectedLength);
    expect(dijkstra(start, finish, graph)[finish].path).toEqual(expectedPath);
  });
});
