class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
  }

  // add a node at the front of the list
  addFront(data) {
    const newNode = new Node(data);
    newNode.next = this._head;
    this._head = newNode;
  }

  // add a node at the end of the list
  addEnd(data) {
    const newNode = new Node(data);
    if (!this._head) {
      this._head = newNode;
      return;
    }
    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // add a node at a specific index
  addAtIndex(index, data) {
    const newNode = new Node(data);
    if (index === 0) {
      // if the list is empty, add the node as the first node
      addFirst(data);
      return;
    }
    let current = this._head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    newNode.next = current;
    previous.next = newNode;
  }

  // remove a node at the front of the list
  removeFront() {
    if (!this._head) {
      return;
    }
    this._head = this._head.next;
  }


  printList() {
    let list = []
    let current = this._head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
