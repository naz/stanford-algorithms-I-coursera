var buildAdjacencyList = function(str) {
  if (!str) return [];

  var result = {};
  var splitLines = str.split('\n');
  for (var i = 0; i < splitLines.length; i++) {
    var rawLine = splitLines[i].trim();
    if (rawLine) {
      var splitElements = rawLine.split('\t');

      result[splitElements[0]] = splitElements.slice(1).map(function(el) {
        return parseInt(el);
      });
    }
  }
  return result;
};

module.exports = buildAdjacencyList;
