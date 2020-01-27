/* 
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

*/

var uniquePaths = function(m, n) {
  var destination = [];
  for (var i = 0; i < m; i++) {
    destination[i] = [];
  }
  if (m === 0 && n === 0) {
    return 0;
  }
  destination[0][0] = 0;
  for (var i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (j === 0) {
        destination[i][j] = 1;
      } else if (i === 0) {
        destination[i][j] = 1;
      } else {
        destination[i][j] = destination[i][j - 1] + destination[i - 1][j];
      }
    }
  }
  return destination[m - 1][n - 1];
};
