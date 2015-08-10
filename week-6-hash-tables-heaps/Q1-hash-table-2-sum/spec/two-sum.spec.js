var twoSum = require('../lib/two-sum').computeTwoSum,
    rangeTwoSum = require('../lib/two-sum').computeTwoSumForRange,
    hash = require('../lib/two-sum').createHash;

describe("should read adjecency list with weights", function() {
  it("reads from file with weights", function() {
    var input = hash([1, -1, 3, -3]);

    expect(twoSum(input, 4)).toEqual(1);
    expect(twoSum(input, 1)).toEqual(0);
    expect(twoSum(input, 0)).toEqual(2);
  });

  it("should work with duplicates", function(){
    var input = hash([1, -1, 3, -3, 3, 3]);

    expect(twoSum(input, 4)).toEqual(3);
  });

  it("should calculate correct twosums for range", function(){
    var input = hash([1, -1, 3, -3, 3]);

    expect(rangeTwoSum(input, -1, 1)).toEqual(1);
    expect(rangeTwoSum(input, -3, 3)).toEqual(3);
  });
});
