var largestKey = require('../../utils/find-largest-key');

describe('largest key', function() {
  it('should return the largest key value for a graph like object', function() {
    var input = {1: 23, 2: 323, 3: 33333};
    expect(largestKey(input)).toEqual(3);
  })
});
