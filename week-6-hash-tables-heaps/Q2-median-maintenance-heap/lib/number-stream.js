var fs = require('fs');

var NumberStream = function(path) {
  var index = 0,
    numbers = fs.readFileSync(path).toString().trim().split(/\r?\n/);

  numbers = numbers.map(function(str) {
    return parseInt(str)
  });

  var next = function() {
    var nextNum = numbers[index];
    if (nextNum === undefined) throw 'out of bounds';
    index += 1;
    return nextNum;
  };

  var hasNext = function() {
    return !!numbers[index];
  };

  return {
    next: next,
    hasNext: hasNext
  }
};

module.exports = NumberStream;
