'use strict';

const Animal = require('./lib/animal-class');

class Queue {
  constructor() {
    this._storage = [];
  }

  enqueue(value) {
    this._storage.push(value);
  }

  dequeue() {
    const poppedValue = this._storage.shift();
    if (poppedValue) {
      return poppedValue;
    }
    return undefined;
  }

  peek() {
    let finalIndex;
    if (this._storage.length !== 0) {
      for (let i = 0; i < this._storage.length; i++) {
        finalIndex = i;
      }
      return finalIndex;
    }
    return undefined;
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
      this.cats.enqueue(animal);
    }
    if (animal.species.toLowerCase() === 'dog') {
      this.dogs.enqueue(animal);
    }
    return null;
  }

  dequeue(pref) {
    if (this.cats.peek() === undefined) {
      console.log(this.cats.peek());
      while (this.cats.peek() !== undefined) {
        console.log('here, while loop');
        this.cats.dequeue();
      }
    }
    if (this.dogs.peek() === 'undefined') {
      while (this.dogs.peek() !== 'undefined') {
        this.dogs.dequeue();
      }
    }
    const catPeekQueuePosition = this.cats.peek();
    const dogPeekQueuePosition = this.dogs.peek();
    if (pref === 'cat') {
      return this.cats.dequeue();
    }
    if (pref === 'dog') {
      return this.dogs.dequeue();
    }
    if (catPeekQueuePosition < dogPeekQueuePosition || dogPeekQueuePosition === undefined) {
      return this.cats.dequeue();
    } 
    return this.dogs.dequeue();
  }
};
