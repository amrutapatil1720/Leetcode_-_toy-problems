/*A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 Link - https://leetcode.com/problems/univalued-binary-tree/


Example 1:


Input: [1,1,1,1,1,null,1]
Output: true 

Input: [2,2,2,5,2]
Output: false
*/

var isUnivalTree = function(root, value = root.val) {
  if (!root) {
    return true;
  }
  if (root.val !== value) {
    return false;
  }
  return isUnivalTree(root.left, value) && isUnivalTree(root.right, value);
};
