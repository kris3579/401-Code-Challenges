'use strict';

const insertShiftArray = module.exports = {};

insertShiftArray.insert = function (arr, inp) {
  if (!Array.isArray(arr)) {
    return 'Error';
  }
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, inp);
  return arr;
};
