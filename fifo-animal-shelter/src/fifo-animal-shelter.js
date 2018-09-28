'use strict';

const Animal = require('./lib/animal-class');

class Stack {
  constructor() {
    this._storage = [];
    this.top = this[this._storage.length - 1];
  }

  pop() {
    return this._storage.pop();
  }

  push(value) {
    this._storage.push(value);
  }

  peek() {
    return this.top;
  }
}

class Queue {
  constructor() {
    this.stackA = new Stack();
    this.stackB = new Stack();
  }

  enqueue(value) {
    this.stackA.push(value);
  }

  dequeue() {
    let poppedValue = this.stackB.pop();
    if (poppedValue) {
      return poppedValue;
    }
    while (true) {
      poppedValue = this.stackA.pop();
      if (poppedValue) {
        this.stackB.push(poppedValue);
      } else {
        break;
      }
    }
    poppedValue = this.stackB.pop();
    return poppedValue;
  }
}

module.exports = class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
    this.counter = 0;
  }

  enqueue(animal) {
    if (!(animal instanceof Animal)) {
      return null;
    }
    animal.queuePosition = this.counter;
    this.counter += 1;
    if (animal.species.toLowerCase() === 'cat') {
      this.cats.stackA.push(animal);
    }
    if (animal.species.toLowerCase() === 'dog') {
      this.dogs.stackA.push(animal);
    }
    return null;
  }

  dequeue(pref) {
    if (this.cats.stackB.peek() === undefined) {
      console.log(this.cats.stackA.peek());
      while (this.cats.stackA.peek() !== undefined) {
        console.log('here, while loop');
        this.cats.stackA.pop();
      }
    }
    if (this.dogs.stackB.peek() === 'undefined') {
      while (this.dogs.stackA.peek() !== 'undefined') {
        this.dogs.stackA.pop();
      }
    }
    const catPeekQueuePosition = this.cats.stackB.peek();
    const dogPeekQueuePosition = this.dogs.stackB.peek();
    if (pref === 'cat') {
      return this.cats.stackB.pop();
    }
    if (pref === 'dog') {
      return this.dogs.stackB.pop();
    }
    if (catPeekQueuePosition < dogPeekQueuePosition) {
      return this.cats.stackB.pop();
    } 
    return this.dogs.stackB.pop();
  }
};
