'use strict';

const Node = require('./lib/node');
// const logger = require('./lib/logger')

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

  mergeLists(LL1, LL2) {
    if (LL1.head === null) {
      return LL2;
    }
    if (LL2.head === null) {
      return LL1;
    }
    let counter = 0;
    let currentNodeLL1 = LL1.head;
    let currentNodeLL2 = LL2.head;
    let LL1EndNode = LL1.head;
    while (LL1EndNode.next) {
      LL1EndNode = LL1EndNode.next;
      counter += 1;
    }
    for (let i = 0; i <= counter; i++) {
      LL1EndNode.next = currentNodeLL1;
      LL1EndNode = LL1EndNode.next;
      currentNodeLL1 = currentNodeLL1.next;
      if (currentNodeLL2 !== null) {
        LL1EndNode.next = currentNodeLL2;
        LL1EndNode = LL1EndNode.next;
        currentNodeLL2 = currentNodeLL2.next;
      }
      // logger.log(logger.INFO, `LL1 linked list ${LL1.head}`);
    }
    // while (currentNodeLL2 !== null) {
    //   LL1EndNode.next = currentNodeLL2;
    //   currentNodeLL2 = currentNodeLL2.next;
    //   LL1EndNode = LL1EndNode.next;
    // }
    return LL1;
  }
};
