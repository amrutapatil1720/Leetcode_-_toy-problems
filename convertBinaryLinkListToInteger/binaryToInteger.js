/*
1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example 1:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
Example 3:

Input: head = [1]
Output: 1
Example 4:

Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
Output: 18880
Example 5:

Input: head = [0,0]
Output: 0

*/

var getDecimalValue = function(head) {
  var str = "";
  if (head === null) {
    return head;
  } else {
    while (head) {
      str = str + head.val;
      head = head.next;
    }
  }
  var num = parseInt(str, 2);
  return num;
};

var removeElements = function(head, val) {
  if (head === null) {
    return head;
  }
  // var list=head;

  while (head != null) {
    var previous = head;
    while (previous != null && previous.next != null) {
      var current = previous.next;
      if (current.val === val) {
        previous.next = current.next;
      } else {
        previos = previos.next;
      }
    }
  }
  return head;
};
