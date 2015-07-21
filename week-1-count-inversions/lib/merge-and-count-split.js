'use strict';

var mergeAndCountSplitInversions = function(a, b) {
  var mergedLength = a.length + b.length,
    mergedArr = [],
    leftIndex = 0,
    rightIndex = 0,
    inversionsCount = 0;

  for (var k = 0; k < mergedLength; k++) {
    var leftSide = a[leftIndex],
      rightSide = b[rightIndex];

    if (leftSide < rightSide) {
      mergedArr.push(leftSide);
      leftIndex += 1;
    } else if (rightSide < leftSide) {
      inversionsCount += a.length - leftIndex;
      mergedArr.push(rightSide);
      rightIndex += 1;
    } else if (rightSide !== undefined) {
      mergedArr.push(rightSide);
      rightIndex += 1;
    } else if (leftSide !== undefined) {
      mergedArr.push(leftSide);
      leftIndex += 1;
    }  else {
      throw 'unexpected input';
    }
  }

  return {
    mergedArr: mergedArr,
    inversions: inversionsCount
  }
};

module.exports = mergeAndCountSplitInversions;
