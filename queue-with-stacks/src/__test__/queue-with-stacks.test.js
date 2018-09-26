'use strict';

const QueueWithStacks = require('../queue-with-stacks');

const testQueue = new QueueWithStacks();

describe('queue-with-stacks.js', () => {
  test('Successful enqueue', () => {
    testQueue.enqueue(5);
    const queueValue = testQueue.stackA.pop();
    expect(queueValue).toEqual(5);
  });

  test('Successful dequeue', () => {
      testQueue.enqueue(5);
      const dequeueResult = testQueue.dequeue();
      expect(dequeueResult).toEqual(5);
  })
});
