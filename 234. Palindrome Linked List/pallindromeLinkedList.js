/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2                 Input: 1 -> 1
Output: false               Output: true

Example 2:

Input: 1->2->2->1           Input: [1,4,-1,-1,4,1]
Output: true                Output: true

Input: -129 -> -129
Output: true

*/

var isPalindrome = function(head) {
  var s = " ";
  if (head === null || head.next === null) {
    return true;
  }
  if (head.val === head.next.val && head.next.next === null) {
    return true;
  }
  while (head !== null) {
    s = s + head.val + " ";
    head = head.next;
  }
  if (
    s ===
    s
      .split(" ")
      .reverse()
      .join(" ")
  ) {
    return true;
  } else {
    return false;
  }
};
