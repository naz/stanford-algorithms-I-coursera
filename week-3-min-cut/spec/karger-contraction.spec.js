var karger = require('../lib/karger-contraction');

describe('karger random contraction algorithm', function() {
  it('should calculate correct cut for the simplest version of the graph', function() {
    // 1--2
    // | /|
    // |/ |
    // 3--4
    var input = {
      1: [2, 3],
      2: [1, 3, 4],
      3: [1, 2, 4],
      4: [2, 3]
    };

    var expectedCut = 2;
    expect(karger(input)).toEqual(expectedCut);
  });


  it('should calculate correct min cut for graphs from the samples', function() {
    // 3--4-----5--6
    // |\/|     |\/|
    // |/\|     |/\|
    // 2--1-----7--8
    var input = {
      1: [2, 3, 4, 7],
      2: [1, 3, 4],
      3: [1, 2, 4],
      4: [1, 2, 3, 5],
      5: [4, 6, 7, 8],
      6: [5, 7, 8],
      7: [1, 5, 6, 8],
      8: [5, 6, 7]
    };

    var expectedCut = 2;
    expect(karger(input)).toEqual(expectedCut);
  });

  it('should calculate correct min cut for graphs from the samples', function() {
    // 3--4-----5--6
    // |\/|     |\/|
    // |/\|     |/\|
    // 2--1     7--8
    var input = {
      1: [2, 3, 4],
      2: [1, 3, 4],
      3: [1, 2, 4],
      4: [1, 2, 3, 5],
      5: [4, 6, 7, 8],
      6: [5, 7, 8],
      7: [5, 6, 8],
      8: [5, 6, 7]
    };

    var expectedCut = 1;
    expect(karger(input)).toEqual(expectedCut);
  });
});
