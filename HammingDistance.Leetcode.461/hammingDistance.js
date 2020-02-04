/*

461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4

Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

var hammingDistance = function(x, y) {
  var xbin = (x >>> 0).toString(2);
  var ybin = (y >>> 0).toString(2);
  var len = xbin.length > ybin.length ? xbin.length : ybin.length;
  while (xbin.length < len) {
    xbin = "0" + xbin;
    xbin.length - 1;
  }
  while (ybin.length < len) {
    ybin = "0" + ybin;
    ybin.length - 1;
  }
  var count = 0;
  for (var i = 0; i < xbin.length; i++) {
    if (xbin[i] !== ybin[i]) {
      count++;
    }
  }
  return count;
};
