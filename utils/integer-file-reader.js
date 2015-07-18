var fs = require('fs');

var readIntsFromFile = function(path){
  var inputArr = fs.readFileSync(path).toString().trim().split('\n');
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = parseInt(inputArr[i]);
  }
  return inputArr;
};

module.exports = readIntsFromFile;
