'use strict';

const KthFromTheEnd = require('../kth-from-the-end');

const kthFromTheEndTest = new KthFromTheEnd();

for (let i = 0; i < 5; i++) {
  kthFromTheEndTest.insertAtHead(i);
}

describe('kth-from-the-end.js', () => {
  test('Successful', () => {
    const nodeValue = kthFromTheEndTest.kthFromEnd(2);
    expect(nodeValue).toEqual(2);
  });
  test('Output of Exception due to k being larger than the linked-list', () => {
    const nodeValue = kthFromTheEndTest.kthFromEnd(7);
    expect(nodeValue).toEqual('Exception');
  });
  test('Output of null due to k not being a number', () => {
    const nodeValue = kthFromTheEndTest.kthFromEnd('y');
    expect(nodeValue).toEqual(null);
  });
});
