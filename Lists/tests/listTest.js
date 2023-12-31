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

  it("should add a node at the end of the list", () => {
    const list = new LinkedList();
    list.addEnd(1);
    list.addEnd(2);
    list.addEnd(3);

    let expectedArray = [1, 2, 3];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });

  it("should add a node at a specific index", () => {
    const list = new LinkedList();
    list.addFront(1);
    list.addFront(2);
    list.addFront(3);
    list.addAtIndex(1, 4); //[1 -> index, 4 -> newNode]

    let expectedArray = [3, 4, 2, 1];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });

  it("should remove a node at the front of the list", () => {
    const list = new LinkedList();
    list.addFront(1);
    list.addFront(2);
    list.addFront(3);
    list.removeFront();

    let expectedArray = [2, 1];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });

  it("should remove a node at the end of the list", () => {
    const list = new LinkedList();
    list.addFront(1);
    list.addFront(2);
    list.addFront(3);
    list.removeEnd();

    let expectedArray = [3, 2];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });

  it("should remove a node at a specific index", () => {
    const list = new LinkedList();
    list.addFront(1);
    list.addFront(2);
    list.addFront(3);
    list.removeAtIndex(1);

    let expectedArray = [3, 1];
    let actualArray = [];
    let current = list._head;
    while (current) {
      actualArray.push(current.data);
      current = current.next;
    }
    assert.deepEqual(expectedArray, actualArray);
  });
});