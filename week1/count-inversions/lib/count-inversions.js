'use strict';

var mergeAndCountSplitInversions = require('./merge-and-count-split');

var sortAndCountInversions = function(arr) {
  if (arr.length < 2) {
    return {
      sortedArray: arr,
      inversions: 0
    };
  }

  var middle = Math.floor(arr.length / 2);
  var left = sortAndCountInversions(arr.slice(0, middle));
  var right = sortAndCountInversions(arr.slice(middle));
  var split = mergeAndCountSplitInversions(left.sortedArray, right.sortedArray);

  return {
    sortedArray: split.mergedArr,
    inversions: split.inversions + left.inversions + right.inversions
  };
};


var countInversions = function(arr) {
  if (arr.length <= 1) return 0;
  return sortAndCountInversions(arr).inversions;
};

module.exports = countInversions;
