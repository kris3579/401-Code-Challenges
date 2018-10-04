'use strict';

const fizzBuzzTree = module.exports = {};

fizzBuzzTree.traversal = function (root) {
  if (root.left) {
    fizzBuzzTree.traversal(root.left);
  }
  if (root.right) {
    fizzBuzzTree.traversal(root.right);
  }
  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'fizzBuzz';
  }
  if (root.value % 3 === 0 && root.value % 5 !== 0) {
    root.value = 'fizz';
  }
  if (root.value % 3 !== 0 && root.value % 5 === 0) {
    root.value = 'buzz';
  }
};

fizzBuzzTree.fizzBuzzTreeTransformation = function (tree) {
  if (!tree.root) {
    return undefined;
  }
  fizzBuzzTree.traversal(tree.root);
  return tree;
};
