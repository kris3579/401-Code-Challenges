'use strict';

const insertShiftArray = require('../insertShiftArray');

describe('#insertShiftArray.js', () => {
  test('Something other than an array', () => {
    const arrayCheck = insertShiftArray.insert(2, 3);
    expect(Array.isArray(arrayCheck)).toEqual(false);
  });
  test('Less than two values in the array', () => {
    const arrayCheck = insertShiftArray.insert([1], 2);
    expect(arrayCheck.length).toBeGreaterThan(1);
  });
  test('input is null', () => {
    const expected = [null];
    const inpCheck = insertShiftArray.insert([1, 2, 3, 4], null);
    expect(inpCheck).toEqual(expect.arrayContaining(expected));
  });
});
