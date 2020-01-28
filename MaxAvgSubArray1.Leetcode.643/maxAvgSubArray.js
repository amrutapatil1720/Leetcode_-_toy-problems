/*

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
*/

var findMaxAverage = function(nums, k) {
  var res = 0;

  for (var i = 1; i < nums.length; i++) {
    sum = nums[i - 1];
    nums[i] = nums[i] + sum;
  }
  res = nums[k - 1] / k;
  for (var i = 0; i < nums.length; i++) {
    var temp = (nums[i + k] - nums[i]) / k;
    if (res < temp) res = temp;
  }
  return res;
};
