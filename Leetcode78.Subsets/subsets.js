/*Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

var subsets = function(nums) {
  var final = [];
  final.push([]);

  for (var i = 1; i < 1 << nums.length; i++) {
    var subset = [];
    for (var j = 0; j < nums.length; j++) {
      if ((i & (1 << j)) > 0) {
        subset.push(nums[j]);
      }
    }
    final.push(subset);
  }
  return final;
};
