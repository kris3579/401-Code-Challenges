'use strict';

const Node = require('./lib/node');

module.exports = class InsertionsClass {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.end) {
      this.end.next = newNode;
    }
  }
}
