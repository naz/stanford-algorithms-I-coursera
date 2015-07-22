var listReader = require('../lib/adjacency-list-reader');

describe('adjacency list reader', function() {
  it('should return empty array for empty input', function(){
    var emptyInput = '';
    var expectedResul = [];
    expect(listReader(emptyInput)).toEqual(expectedResul);
  });

  it('should transform given input into adjacency list representation of graph', function() {
    var sampleInput = "1\t2\t3\t4\t" +
                      "\n2\t1\t4\t" +
                      "\n3\t1\t" +
                      "\n4\t2\t1\t";

    var expectedResult = {
      1: [2, 3, 4],
      2: [1, 4],
      3: [1],
      4: [2, 1]
    };

    expect(listReader(sampleInput)).toEqual(expectedResult);
  });
});
