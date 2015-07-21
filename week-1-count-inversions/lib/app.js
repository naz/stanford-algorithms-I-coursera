var readInput = require('../../utils/integer-file-reader'),
  inversionCounter = require('./count-inversions');

var inputArr = readInput('IntegerArray.txt');
var inversionCount = inversionCounter(inputArr);
console.log('result: ' + inversionCount);
