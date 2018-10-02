'use strict';

const reverseTheArray = module.exports = {};

reverseTheArray.reverseArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const oppositeI = arr.length - 1 - i;
    const oppIValue = arr[oppositeI];
    if (i > oppositeI || i === oppositeI) {
      break;
    }
    arr[oppositeI] = arr[i];
    arr[i] = oppIValue;
  }
  return arr;
};
