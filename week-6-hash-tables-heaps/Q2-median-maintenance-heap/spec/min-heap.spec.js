var Heap = require('../lib/min-heap');

describe('min heap', function() {
  it('should maintain correct min', function() {
    var heap = new Heap();
    heap.insert(8);
    expect(heap.min()).toEqual(8);

    heap.insert(4);
    expect(heap.min()).toEqual(4);

    heap.insert(10);
    expect(heap.min()).toEqual(4);

    heap.insert(2);
    expect(heap.min()).toEqual(2);
  });

  it('should maintain correct min', function() {
    var heap = new Heap();
    heap.insert(-5);
    expect(heap.min()).toEqual(-5);

    heap.insert(-6);
    expect(heap.min()).toEqual(-6);
  });

  it('should be able to extract min and maintain heap properties', function() {
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
    expect(heap.min()).toEqual(4);
    heap.extractMin();
    expect(heap.min()).toEqual(4);
    heap.extractMin();
    expect(heap.min()).toEqual(4);
    heap.extractMin();
    expect(heap.min()).toEqual(8);
  });


  it('should extract min correctly', function() {
    var heap = new Heap();
    heap.insert(5048);
    heap.insert(5078);
    heap.insert(5400);
    heap.insert(5484);
    heap.insert(7733);
    expect(heap.min()).toEqual(5048);
    heap.extractMin();
    expect(heap.min()).toEqual(5078);
  });
});
