var DFSFinishTime = require('../lib/dfs-finish-time'),
  Digraph = require('../lib/digraph');

describe('Dfs finish time', function(){
  it('should assign correct finish times to a graph shown in a sample', function(){
    var input = new Digraph();
    input.addEdge(1,7);
    input.addEdge(2,5);
    input.addEdge(3,9);
    input.addEdge(4,1);
    input.addEdge(5,8);
    input.addEdge(6,3);
    input.addEdge(6,8);
    input.addEdge(7,4);
    input.addEdge(7,6);
    input.addEdge(8,2);
    input.addEdge(9,6);

    var expectedFinishingTimesMap = {
      1 : 3,
      2 : 5,
      3 : 2,
      4 : 8,
      5 : 6,
      6 : 9,
      7 : 1,
      8 : 4,
      9 : 7
    } ;

    expect(new DFSFinishTime().run(input)).toEqual(expectedFinishingTimesMap);
  });
});
