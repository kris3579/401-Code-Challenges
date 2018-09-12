'use strict';

function reverseArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const oppositeI = arr.length - 1 - i;
    if (i < oppositeI || i === oppositeI) {
      break;
    }
    arr[oppositeI] = arr[i];
    arr[i] = oppositeI;
  }
}
