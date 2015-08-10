var fs = require('fs'),
  hash = require('./two-sum').createHash,
  twoSum = require('./two-sum').computeTwoSumForRange;

var rawInput = fs.readFileSync('algo1-programming_prob-2sum.txt').toString();
var numbersArr = rawInput.trim().split(/\r?\n/);
var hashedArray = hash(numbersArr);

//console.log(Object.keys(hashedArray).length)

//var totalTargetHitCounts = twoSum(hashedArray, -10, 10);
var totalTargetHitCounts = twoSum(hashedArray, -10000, 10000);

console.log('Target hits: ' + totalTargetHitCounts);
