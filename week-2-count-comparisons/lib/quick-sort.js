'use strict';

var swap = require('../../utils/swap'),
    medianSwap = require('./median-swap');

function QuickSorter (unsortedArr, pivot) {
  var arr = unsortedArr,
    pivotType = pivot,
    comparisons = 0;

  var sort = function(leftIndex, rightIndex) {
    if (leftIndex === undefined || leftIndex === null) leftIndex = 0;
    if (rightIndex === undefined || rightIndex === null) rightIndex = arr.length - 1;

    if (leftIndex < rightIndex) {
      comparisons += rightIndex - leftIndex;
      setPivot(leftIndex, rightIndex);
      var partitionedPivotIndex = partition(leftIndex, rightIndex);
      sort(leftIndex, partitionedPivotIndex - 1);
      sort(partitionedPivotIndex + 1, rightIndex);
    }
  };

  var partition = function(leftIndex, rightIndex) {
    var i = leftIndex + 1;
    var pivot = arr[leftIndex];
    for (var j = leftIndex + 1; j <= rightIndex; j++) {
      if (arr[j] < pivot) {
        arr = swap(arr, i, j);
        i += 1;
      }
    }
    arr = swap(arr, leftIndex, i - 1);
    return i - 1;
  };

  var setPivot = function(leftIndex, rightIndex) {
    if (pivotType === 'FIRST_ITEM') {
      // no need to act, default behaviour
    } else if (pivotType === 'LAST_ITEM') {
      arr = swap(arr, leftIndex, rightIndex)
    } else if (pivotType === 'MEDIAN') {
      arr = medianSwap(arr, leftIndex, rightIndex);
    } else {
      throw 'invalid parameter, pivotType should be one of: FIRST_ITEM, LAST_ITEM, MEDIAN'
    }
  };

  return {
    sort: sort,
    arr: function() {
      return arr;
    },
    comparisons: function() {
      return comparisons;
    }
  }
}

module.exports = QuickSorter;
