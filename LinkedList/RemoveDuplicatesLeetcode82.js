/*

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

*/

var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  if (head.val !== head.next.val) {
    head.next = deleteDuplicates(head.next);
    return head;
  }

  var current = head;
  while (current !== null && current.val === head.val) {
    current = current.next;
  }
  return deleteDuplicates(current);
};
