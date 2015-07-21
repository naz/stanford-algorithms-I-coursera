'use strict';

var medianSwap = require('../lib/median-swap');

// EXAMPLE: For the input array 8 2 4 5 7 1 you would consider the first (8), middle (4),
// and last (1) elements; since 4 is the median of the set {1,4,8}, you would use 4 as your pivot element.
describe('Median swap mechanism for quick sort', function(){
  it('should swap array items correctly', function(){
    var inputArr = [8, 2, 4, 5, 7, 1];
    var expectedResult = [4, 2, 8, 5, 7, 1];

    var result = medianSwap(inputArr, 0, inputArr.length-1);

    expect(result).toEqual(expectedResult)
  });
});
