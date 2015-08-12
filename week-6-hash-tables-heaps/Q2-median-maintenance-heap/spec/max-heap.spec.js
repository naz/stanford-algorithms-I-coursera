var Heap = require('../lib/max-heap');

describe('min heap', function(){
  it('should maintain correct min', function() {
    var heap = new Heap();
    heap.insert(8);
    expect(heap.max()).toEqual(8);

    heap.insert(4);
    expect(heap.max()).toEqual(8);

    heap.insert(10);
    expect(heap.max()).toEqual(10);

    heap.insert(2);
    expect(heap.max()).toEqual(10);
  });

  it('should maintain correct min', function() {
    var heap = new Heap();
    heap.insert(32184);
    expect(heap.max()).toEqual(32184);

    heap.insert(-5478);
    expect(heap.max()).toEqual(32184);

    heap.insert(8684);
    expect(heap.max()).toEqual(32184);

    heap.extractMax();
    expect(heap.max()).toEqual(8684);
  });

  it('should maintain correct max', function() {
    var heap = new Heap();
    heap.insert(-5);
    expect(heap.max()).toEqual(-5);

    heap.insert(-6);
    expect(heap.max()).toEqual(-5);
  });

  it('should be able to extract max and maintain heap properties', function(){
    var heap = new Heap();
    heap.insert(4);
    heap.insert(4);
    heap.insert(8);
    heap.insert(9);
    heap.insert(4);
    heap.insert(12);
    heap.insert(9);
    heap.insert(11);
    heap.insert(13);
    expect(heap.max()).toEqual(13);
    heap.extractMax();
    expect(heap.max()).toEqual(12);
    heap.extractMax();
    expect(heap.max()).toEqual(11);
    heap.extractMax();
    expect(heap.max()).toEqual(9);
  });

  it('should keep the max value correctly', function() {
    var heap = new Heap();
    heap.insert(5078);
    heap.insert(4338);
    heap.insert(5048);
    heap.insert(1344);
    heap.insert(1692);
    heap.insert(1779);
    heap.insert(2138);
    heap.insert(1115);
    expect(heap.max()).toEqual(5078);
    heap.extractMax();
    expect(heap.max()).toEqual(5048);
  });
});
