var MM = require('../lib/median-maintenance'),
    Stream = require('../lib/number-stream');

describe('median maintenance', function(){
  it('trivial median calculation', function() {
    var numStream = new Stream(__dirname + '/test_trivial.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(0);
  });

  it('calculates popper median for test 10 file', function() {
    var numStream = new Stream(__dirname + '/test10.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(-5371);
  });

  it('calculates popper median for test 20 file', function() {
    var numStream = new Stream(__dirname + '/test20.txt');

    var median = new MM(numStream).sumOfMedians() % 20;

    expect(median).toEqual(5);
  });

  it('calculates popper median for test 100 file', function() {
    var numStream = new Stream(__dirname + '/test100.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(6138);
  });

  it('calculates popper median for test 1000 file', function() {
    var numStream = new Stream(__dirname + '/test1000.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(8687);
  });

  it('calculates popper median for test 10000 file', function() {
    var numStream = new Stream(__dirname + '/test10000.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(-3717);
  });

  it('calculates popper median for actual file from the course', function() {
    var numStream = new Stream(__dirname + '/Median.txt');

    var median = new MM(numStream).sumOfMedians() % 10000;

    expect(median).toEqual(1213);
  });
});
