const chai = require('chai');
const assert = chai.assert;

const Array = require('../Array/index');

describe('List', () => {
  const list = new Array();
  it('should add item at the first position', () => {
    list.addFirst(1);
    assert.equal(list.data[0], 1);
  });

  it('should add item at the last position', () => {
    list.addLast(1);
    assert.equal(list.data[0], 1);
  });

  it('should add item at a specific index', () => {
    list.addAtIndex(0, 1);
    assert.equal(list.data[0], 1);
  });

  it('should remove item at the first position', () => {
    list.removeFirst();
    assert.equal(list.data[0], 1);
  });

  it('should remove item at the last position', () => {
    list.removeLast();
    assert.equal(list.data[0], 1);
  });

  it('should remove item at a specific index', () => {
    list.removeAtIndex(0);
    assert.equal(list.data.length, 0);
  });
});