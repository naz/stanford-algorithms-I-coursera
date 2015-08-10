var createHash = function(arr) {
  var hash = {};

  for (var i = 0; i < arr.length; i++) {
    if (hash[arr[i]] === undefined) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] = hash[arr[i]] + 1;
    }
  }

  return hash;
};

var computeTwoSum = function(hash, target){
  console.log('Computing two sum for target: ' + target);
  var twoSumCount = 0;
  for (var key in hash) {
    //console.log('processing key: ' + key);
    var expectedKey = target - parseInt(key);
    if (expectedKey < parseInt(key)) continue;
    if (hash[expectedKey]) {
      //console.log('two sum:' + hash[expectedKey]);
      twoSumCount += hash[expectedKey];
    }
  }

  return twoSumCount;
};

var hasTwoSum = function(hash, target){
  console.log('Computing two sum for target: ' + target);

  for (var key in hash) {
    var expectedKey = target - parseInt(key);
    if (hash[expectedKey]) {
      return true;
    }
  }

  return false;
};

var computeTwoSumForRange = function(hash, start, end){
  var totalTwoSums = 0;

  for(var i=start; i < end + 1; i++){
    if(hasTwoSum(hash, i)){
      totalTwoSums +=1;
    }
    //totalTwoSums += computeTwoSum(hash, i);
  }

  return totalTwoSums;
};

module.exports = {
  createHash: createHash,
  computeTwoSum: computeTwoSum,
  computeTwoSumForRange: computeTwoSumForRange
};
