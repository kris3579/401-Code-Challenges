'use strict';

const QueueWithStacks = require('../queue-with-stacks');

const testQueue = new QueueWithStacks();

describe('queue-with-stacks.js', () => {
  test('Successful enqueue', () => {
    testQueue.enqueue(5);
    const queueValue = testQueue.stackA.pop();
    expect(queueValue).toEqual(5);
  });

  test('Successful dequeue with value in stackA', () => {
      testQueue.enqueue(5);
      const dequeueResult = testQueue.dequeue();
      expect(dequeueResult).toEqual(5);
  });

  test('Successful dequeue with value in stackB', () => {
      testQueue.enqueue(5);
      testQueue.enqueue(6);
      testQueue.dequeue();
      const dequeueResult = testQueue.dequeue();
      expect(dequeueResult).toEqual(6);
  });

  test('Successful dequeue with varied order of enqueues and dequeues', () => {
      testQueue.enqueue(1);
      testQueue.enqueue(2);
      testQueue.enqueue(3);
      testQueue.dequeue();
      testQueue.enqueue(4);
      testQueue.enqueue(5);
      testQueue.dequeue();
      testQueue.dequeue();
      testQueue.enqueue(6);
      testQueue.enqueue(7);
      const dequeueResult = testQueue.dequeue();
      expect(dequeueResult).toEqual(4);
  })
});
