var swap = function(arr, i, j){
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
};

module.exports = swap;
