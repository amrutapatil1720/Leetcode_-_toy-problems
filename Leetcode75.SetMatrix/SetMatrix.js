/*Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
*/

var setZeroes = function(matrix) {
  var final = [];
  var row_set = new Set();
  var col_set = new Set();
  var row = matrix.length;
  var col = matrix[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        row_set.add(i);
        col_set.add(j);
      }
    }
  }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (row_set.has(i) || col_set.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};
