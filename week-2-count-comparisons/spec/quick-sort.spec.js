'use strict';

var sorter = require('../lib/quick-sort'),
  readInput = require('../../utils/integer-file-reader');

describe('Quick sort comparison counter', function() {
  describe('should sort correctly regular arrays', function(){
    it('should sort the sample from the excersise', function() {
      var inputArr = [3, 8, 2, 5, 1, 4, 7, 6];
      var expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];

      var quickSort = new sorter(inputArr, 'FIRST_ITEM');
      quickSort.sort();

      expect(quickSort.arr()).toEqual(expectedResult);
    });

    it('should sort the sample from the excersise', function() {
      var inputArr = [7, 5, 1, 4, 8, 3, 10, 2, 6, 9];
      var expectedResult = {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        comparisons: 24
      };

      var quickSort = new sorter(inputArr, 'FIRST_ITEM');
      quickSort.sort();

      expect(quickSort.arr()).toEqual(expectedResult.arr);
      expect(quickSort.comparisons()).toEqual(expectedResult.comparisons);
    });
  });

  describe('should return correct number of comparisons for given test sets', function(){
    var testSet10, testSet100, testSet1000;
    beforeEach(function(){
      testSet10 = [3, 9, 8, 4, 6, 10, 2, 5, 7, 1];
      testSet100 = readInput(__dirname + '/100.txt');
      testSet1000 = readInput(__dirname + '/1000.txt');
    });
    describe('FIRST_ITEM', function(){
      it('10 elements set', function() {
        var expectedResult = 25;

        var quickSort = new sorter(testSet10, 'FIRST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedResult);
      });

      it('100 elements set', function() {
        var expectedComparisons = 615;

        var quickSort = new sorter(testSet100, 'FIRST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });

      it('1000 elements set', function() {
        var expectedComparisons = 10297;

        var quickSort = new sorter(testSet1000, 'FIRST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });
    });
    describe('LAST_ITEM', function(){
      it('10 elements set', function() {
        var expectedResult = 29;

        var quickSort = new sorter(testSet10, 'LAST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedResult);
      });

      it('100 elements set', function() {
        var expectedComparisons = 587;

        var quickSort = new sorter(testSet100, 'LAST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });

      it('1000 elements set', function() {
        var expectedComparisons = 10184;

        var quickSort = new sorter(testSet1000, 'LAST_ITEM');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });
    });
    describe('MEDIAN', function(){
      it('10 elements set', function() {
        var expectedResult = 21;

        var quickSort = new sorter(testSet10, 'MEDIAN');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedResult);
      });

      it('100 elements set', function() {
        var expectedComparisons = 518;

        var quickSort = new sorter(testSet100, 'MEDIAN');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });

      it('1000 elements set', function() {
        var expectedComparisons = 8921;

        var quickSort = new sorter(testSet1000, 'MEDIAN');
        quickSort.sort();

        expect(quickSort.comparisons()).toEqual(expectedComparisons);
      });
    });
  });
});
