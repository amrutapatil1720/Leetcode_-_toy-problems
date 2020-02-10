/*


160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.

For example, the following two linked lists:
Example 1:

listA = [4,1,8,4,5], listB = [5,0,1,8,4,5]
Output: intersetion node with value = 8

*/

var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  //calculate lengthof 2 linkedlist
  var len1 = countLength(headA);
  var len2 = countLength(headB);

  //calculate difference between 2 list
  var diff = Math.abs(len1 - len2);

  //if first linkedlist lengthis greater than second , then
  if (len1 > len2) {
    headA = increaseNode(headA, diff);
  }
  if (len2 > len1) {
    headB = increaseNode(headB, diff);
  }

  while (headA !== null && headB !== null) {
    if (headA === headB) {
      // console.log(headA)
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
  return null;
};

var countLength = function(head) {
  var count = 0;
  while (head !== null) {
    count++;
    head = head.next;
  }
  return count;
};
var increaseNode = function(head, diff) {
  while (diff > 0) {
    // console.log(head)
    head = head.next;
    diff--;
  }
  return head;
};
