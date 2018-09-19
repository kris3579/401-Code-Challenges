'use strict';

const Node = require('./lib/node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(value) {
    const node = new Node(value); // O(1)

    node.next = this.head; // O(1)
    this.head = node; // O(1)
    return this; // O(1)
  }

  kthFromEnd(k) {
    if (!this.head) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      counter += 1;
    }
    if (k > counter) {
      return 'Exception';
    }
    currentNode = this.head;
    for (let i = 0; i < ((counter - k) + 1); i++) {
      if (i === (counter - k)) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
};
