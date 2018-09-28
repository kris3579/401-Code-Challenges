'use strict';

const Node = require('./lib/node');

module.exports = class InsertionsClass {
  constructor() {
    this.head = null;
    this.currentNode = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.currentNode === null) {
      this.currentNode = newNode;
      return this.currentNode.value;
    }
    if (this.currentNode.next === null) {
      this.currentNode.next = newNode;
      return this.currentNode.next.value;
    }
    return null;
  }
};
