/*
114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

*/

var flatten = function(root) {
  let linknode = null;
  var convert = function(root) {
    if (root === null) {
      return root;
    }
    convert(root.right);
    convert(root.left);
    root.right = linknode;
    root.left = null;
    linknode = root;
  };
  convert(root);
};
