'use strict';

const insertions = require('../insertions');

const insertionsTest = new insertionsClass();

describe('insertions.js', () => {
  test('Successful append', () => {
    const insertNode = insertionsTest.append(5);
    expect(insertNode).toEqual(5);
  });
});
