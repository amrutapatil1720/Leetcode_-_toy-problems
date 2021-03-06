/*

Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. For instance, given the array ,  is between two subarrays that sum to . If your starting array is , that element satisfies the rule as left and right sum to .

You will be given arrays of integers and must determine whether there is an element that meets the criterion.

Function Description

Complete the balancedSums function in the editor below. It should return a string, either YES if there is an element meeting the criterion or NO otherwise.

balancedSums has the following parameter(s):

arr: an array of integers
Input Format

The first line contains , the number of test cases.

The next  pairs of lines each represent a test case.
- The first line contains , the number of elements in the array .
- The second line contains  space-separated integers  where .

Constraints





Output Format

For each test case print YES if there exists an element in the array, such that the sum of the elements on its left is equal to the sum of the elements on its right; otherwise print NO.

Sample Input 0

2
3
1 2 3
4
1 2 3 3
Sample Output 0

NO
YES
Explanation 0

For the first test case, no such index exists.
For the second test case, , therefore index  satisfies the given conditions.

Sample Input 1

3
5
1 1 4 1 1
4
2 0 0 0
4
0 0 2 0 
Sample Output 1

YES
YES
YES

link: https://www.hackerrank.com/challenges/sherlock-and-array/problem

*/

function balancedSums(arr) {
  var count = 0;
  if (arr.length === 1) {
    return "YES";
  }

  for (var i = 0; i < arr.length; i++) {
    var left = arr.slice(0);
    var right = arr.slice(0);
    var leftArr = left.splice(0, i);
    var rightArr = right.splice(i + 1, arr.length - 1);
    //     console.log(right)
    var leftSum = leftArr.reduce((total, item) => total + item, 0);
    var rightSum = rightArr.reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      count++;
    }
  }
  if (count > 0) {
    return "YES";
  } else {
    return "NO";
  }
}
