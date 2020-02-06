/*
203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

var removeElements = function(head, val) {
  if (head === null) {
    return head;
  }
  if (head.next === null && head.val === val) {
    return null;
  }
  var previous = (start = head);

  while (previous != null && previous.next != null) {
    var current = previous.next;
    if (current.val === val) {
      previous.next = current.next;
    } else if (start.val === val) {
      previous = start.next;
      start.next = null;
    } else {
      previous = previous.next;
    }
  }

  return head;
};
