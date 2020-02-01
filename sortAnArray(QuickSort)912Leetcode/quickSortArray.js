/*
912. Sort an Array

Given an array of integers nums, sort the array in ascending order.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]


*/

var sortArray = function(nums) {
  if (nums.length <= 1) return nums;
  var pivot = nums[nums.length - 1];
  var left = [];
  var right = [];
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...sortArray(left), pivot, ...sortArray(right)];
};

/* Using simple sorting

var sortArray = function(nums) {

for(var i=0;i<nums.length;i++) {
        for(var j=i+1;j<nums.length;j++)
        if(nums[i]>nums[j]){
            var temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
    }
    return nums;
};

*/
