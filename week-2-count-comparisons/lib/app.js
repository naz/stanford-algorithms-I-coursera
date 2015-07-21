'use strict';

var readInput = require('../../utils/integer-file-reader'),
  sorter = require('./quick-sort'),
  pivotType = process.argv[2] || 'FIRST_ITEM',
  inputArr = readInput(__dirname + '/QuickSort.txt');

var firstElementPivotSort = new sorter(inputArr, pivotType);
firstElementPivotSort.sort();

console.log(pivotType + ' pivot. Number of comparisons: ' + firstElementPivotSort.comparisons());
console.log('===========================================');
