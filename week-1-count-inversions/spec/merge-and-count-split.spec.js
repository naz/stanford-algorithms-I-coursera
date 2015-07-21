var mergeAndCountSplit = require('../lib/merge-and-count-split');

describe('Merge and count split', function() {
  it('should merge and count splits for two arrays with one inversion', function() {
    var mergeResult = mergeAndCountSplit([2], [1]);
    expect(mergeResult.mergedArr).toEqual([1, 2]);
    expect(mergeResult.inversions).toEqual(1);
  });

  it('should merge and count splits for two arrays with no inversions', function() {
    var mergeResult = mergeAndCountSplit([1, 2, 3], [4, 5, 6]);
    expect(mergeResult.mergedArr).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeResult.inversions).toEqual(0);
  });

  it('should merge and count splits for two arrays multiple inversions', function() {
    var mergeResult = mergeAndCountSplit([3, 4], [1, 2]);
    expect(mergeResult.mergedArr).toEqual([1, 2, 3, 4]);
    expect(mergeResult.inversions).toEqual(4);
  });

  it('should merge and count no inversions for the same numbers', function() {
    var mergeResult = mergeAndCountSplit([3, 3], [3, 3]);
    expect(mergeResult.mergedArr).toEqual([3, 3, 3, 3]);
    expect(mergeResult.inversions).toEqual(0);
  });
});
