'use strict';

const reverseTheArray = require('../src/lib/reverseTheArray');

describe('#reverseTheArray', () => {
  test('', () => {
    const output = reverseTheArray.reverseArray([1, 2, 3, 4]);
    expect(output).toEqual([4, 3, 2, 1]);
  });
});
