'use strict';

const MergeLists = require('../merge-lists');

const mergeListsTest1 = new MergeLists();
const mergeListsTest2 = new MergeLists();
const mergeListsTest3 = new MergeLists();

for (let i = 0; i < 5; i++) {
  mergeListsTest1.insertAtHead(i);
  mergeListsTest2.insertAtHead(i);
}

for (let i = 0; i < 2; i++) {
  mergeListsTest3.insertAtHead(i);
}


describe('kth-from-the-end.js', () => {
  test('Successful', () => {
    const combinedList = mergeListsTest1.mergeLists(mergeListsTest1, mergeListsTest2);
    expect(combinedList.head.value).toEqual(4);
    expect(combinedList.head.next.value).toEqual(4);
    expect(combinedList.head.next.next.value).toEqual(3);
    expect(combinedList.head.next.next.next.value).toEqual(3);
    expect(combinedList.head.next.next.next.next.value).toEqual(2);
    expect(combinedList.head.next.next.next.next.next.value).toEqual(2);
    expect(combinedList.head.next.next.next.next.next.next.value).toEqual(1);
    expect(combinedList.head.next.next.next.next.next.next.next.value).toEqual(1);
    expect(combinedList.head.next.next.next.next.next.next.next.next.value).toEqual(0);
    expect(combinedList.head.next.next.next.next.next.next.next.next.next.value).toEqual(0);
  });
  test('Success with a shorter first list', () => {
    console.log(mergeListsTest2.head.value, mergeListsTest2.head.next.value, mergeListsTest2.head.next.next.value, mergeListsTest2.head.next.next.next.value, mergeListsTest2.head.next.next.next.next.value, mergeListsTest2.head.next.next.next.next.next.value);
    const combinedList = mergeListsTest1.mergeLists(mergeListsTest3, mergeListsTest2);
    expect(combinedList.head.value).toEqual(1);
    expect(combinedList.head.next.value).toEqual(4);
    expect(combinedList.head.next.next.value).toEqual(0);
    expect(combinedList.head.next.next.next.value).toEqual(3);
    expect(combinedList.head.next.next.next.next.value).toEqual(2);
  });
  // test('Output of null due to k not being a number', () => {
  //   const nodeValue = mergeListsTest.kthFromEnd('y');
  //   expect(nodeValue).toEqual(null);
  // });
});
