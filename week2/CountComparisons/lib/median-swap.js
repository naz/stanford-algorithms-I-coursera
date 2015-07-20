'use strict';

var swap = require('../../../utils/swap');

var medianSwap = function(arr, leftIndex, rightIndex) {
  var middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
  var first = arr[leftIndex];
  var middle = arr[middleIndex];
  var last = arr[rightIndex];
  var median = [first, middle, last].sort(function(a, b) {
    return a - b;
  })[1];

  var medianIndex = leftIndex;
  if (median === last) medianIndex = rightIndex;
  if (median === middle) medianIndex = middleIndex;

  return swap(arr, leftIndex, medianIndex);
};

module.exports = medianSwap;
