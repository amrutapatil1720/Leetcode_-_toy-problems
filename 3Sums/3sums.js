/* Leetcode 15. 3Sum */

/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Note:
The solution set must not contain duplicate triplets.

Example:
Given array nums = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

*/

var threeSum = function(nums) {
  var final = [];
  nums.sort();
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      var arr = [];
      if (nums[i] + nums[j + 1] + nums[j + 2] === 0) {
        arr.push(nums[i], nums[j + 1], nums[j + 2]);
      }
      if (arr.length !== 0) {
        if (nums[i] === 0 && nums[j + 1] === 0 && nums[j + 2] === 0) {
          final.push(arr);
          return final;
        } else {
          final.push(arr);
          continue;
        }
      }
    }
  }
  var unique = [...new Set(final)];
  return unique;
};

var nums = [-1, 0, 1, 2, -1, -4];
var opt = console.log(threeSum(nums));
console.log(opt);
