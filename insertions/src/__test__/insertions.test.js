'use strict';

const InsertionsClass = require('../insertions');

const insertionsTest = new InsertionsClass();

describe('insertions.js', () => {
  test('Successful append', () => {
    const insertNode = insertionsTest.append(5);
    expect(insertNode).toEqual(5);
  });
});
