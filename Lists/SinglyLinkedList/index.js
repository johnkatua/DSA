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

  printList() {
    let current = this._head;
    console.log(current.data)
    while (current) {
      console.log(current.data);
      current = current.next;
      console.log(current)
    }
  }
}

module.exports = LinkedList;
