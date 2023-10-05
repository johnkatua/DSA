const chai = require('chai');
const assert = chai.assert;

const Array = require('../Array/index');
const LinkedList = require('../SinglyLinkedList/index');

describe('Array', () => {
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

describe('LinkedList', () => {
  it("should add a node at the front of the list", () => {
    const list = new LinkedList();
    list.addFront(1);
    list.addFront(2);
    list.addFront(3);

    let expectedArray = [3, 2, 1];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });
});