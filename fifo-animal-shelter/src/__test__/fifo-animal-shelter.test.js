'use strict';

const FifoAnimalShelter = require('../fifo-animal-shelter');
const Animal = require('../lib/animal-class');

const testShelter = new FifoAnimalShelter();


const testCat = new Animal();
const testCat2 = new Animal();

const testDog = new Animal();

const incompleteCat = new Animal();

testCat.name = 'Luna';
testCat.species = 'cat';

testCat2.name = 'Gregor';
testCat2.species = 'cat';

testDog.name = 'Jazz';
testDog.species = 'dog';

incompleteCat.name = 'incomplete';

const nonClassCat = ['Luna', 'cat'];

describe('queue-with-stacks.js', () => {
  describe('enqueue tests', () => {
    test('Successful cat enqueue', () => {
      testShelter.enqueue(testCat);
      const queueValue = testShelter.cats.dequeue();
      expect(queueValue).toEqual(testCat);
    });
    test('Successful dog enqueue', () => {
      testShelter.enqueue(testDog);
      const queueValue = testShelter.dogs.dequeue();
      expect(queueValue).toEqual(testDog);
    });
    test('Input other than an object', () => {
      const queueResult = testShelter.enqueue(nonClassCat);
      expect(queueResult).toEqual(null);
    });
  });
  describe('dequeue tests', () => {
    test('Successful dequeue', () => {
      testShelter.enqueue(testCat2);
      const dequeueValue = testShelter.dequeue();
      expect(dequeueValue).toEqual(testCat2);
    });
    test('Successful cat dequeue', () => {
      testShelter.enqueue(testDog);
      testShelter.enqueue(testCat);
      const dequeueValue = testShelter.dequeue('cat');
      expect(dequeueValue).toEqual(testCat);
    });
    test('Successful dog dequeue', () => {
      testShelter.enqueue(testCat);
      testShelter.enqueue(testDog);
      const dequeueValue = testShelter.dequeue('dog');
      expect(dequeueValue).toEqual(testDog);
    });
  });
});
