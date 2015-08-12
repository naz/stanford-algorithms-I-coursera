var Heap = require('heap');

var MedianMaintenance = function(inputStream) {
  var heapLo = new Heap(function(a, b) {
      return b - a;
    }),
    heapHi = new Heap(),
    stream = inputStream,
    medianSum = 0;

  var insert = function(num) {
    num = parseInt(num);
    if (heapLo.size() === 0 && heapHi.size() === 0) {
      heapLo.push(num);
    } else if (heapLo.peek() >= num) {
      heapLo.push(num);
    } else if (heapHi.peek() <= num || heapHi.size() === 0) {
      heapHi.push(num);
    } else {
      heapLo.push(num);
    }

    if (heapHi.size() > heapLo.size() && (heapHi.size() - 1) > heapLo.size()) {
      var toRedistribute = heapHi.peek();
      heapHi.pop();
      heapLo.push(toRedistribute);
    }

    if (heapHi.size() < heapLo.size() && heapHi.size() < (heapLo.size() - 1)) {
      var toRedistribute = heapLo.peek();
      heapLo.pop();
      heapHi.push(toRedistribute);
    }

  };

  var median = function() {
    if (heapHi.size() === 0 && heapLo.size() === 1) return heapLo.peek();
    if (heapLo.size() === 0 && heapHi.size() === 1) return heapHi.peek();
    if (heapHi.size() === heapLo.size()) return heapLo.peek();
    if (heapHi.size() > heapLo.size()) return heapHi.peek();
    if (heapLo.size() > heapHi.size()) return heapLo.peek();
  };


  var sumOfMedians = function() {
    while (stream.hasNext()) {
      insert(stream.next());
      medianSum += median();
    }

    return medianSum;
  };

  return {
    median: median,
    sumOfMedians: sumOfMedians
  }
};

module.exports = MedianMaintenance;
