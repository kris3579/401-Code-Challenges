'use strict';

const fizzBuzzTree = require('../fizz-buzz-tree');
const binaryTreeClass = require('../lib/binary-tree-class');

const testTree = new binaryTreeClass.BinaryTree();
const a = new binaryTreeClass.Node(7);
const b = new binaryTreeClass.Node(10);
const c = new binaryTreeClass.Node(4);
const d = new binaryTreeClass.Node(6);
const e = new binaryTreeClass.Node(15);
const f = new binaryTreeClass.Node(8);
const g = new binaryTreeClass.Node(2);
const h = new binaryTreeClass.Node(3);

testTree.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.right = g;
g.right = h;

const emptyTestTree = new binaryTreeClass.BinaryTree();

describe('fizz-buzz-tree.js', () => {
  test('Successful node edits', () => {
    const tree = fizzBuzzTree.fizzBuzzTreeTransformation(testTree);
    expect(tree.root.value).toEqual(7);
    expect(tree.root.left.value).toEqual('buzz');
    expect(tree.root.left.left.value).toEqual('fizz');
    expect(tree.root.left.right.value).toEqual('fizzBuzz');
    expect(tree.root.left.right.right.right.value).toEqual('fizz');
  });
  test('Return undefined if no tree.root', () => {
    const tree = fizzBuzzTree.fizzBuzzTreeTransformation(emptyTestTree);
    expect(tree).toEqual(undefined);
  });
});
