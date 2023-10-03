class Array {
  constructor() {
    this.data = [];
  }

  // add item at the first position
  addFirst(item) {
    this.data.unshift(item);
  };

  // add item at the last position
  addLast(item) {
    this.data.push(item);
  };

  // Add item at a specific index
  addAtIndex(index, item) {
    this.data.splice(index, 0, item);
  };

  // remove item at the first position
  removeFirst() {
    this.data.shift();
  };

  // remove item at the last position
  removeLast() {
    this.data.pop();
  };

  // remove item at a specific index
  removeAtIndex(index) {
    this.data.splice(index, 1);
  };
}

module.exports = Array;
