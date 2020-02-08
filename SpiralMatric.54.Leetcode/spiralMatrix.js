/*

54. Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {
  var row = 0,
    col = 0;
  var last_row = matrix.length - 1;
  var last_col = matrix[0].length - 1;
  var result = [];

  while (row <= last_row && col <= last_col) {
    for (var i = col; i <= last_col; i++) {
      result.push(matrix[row][i]);
    }
    row++;

    for (var i = row; i <= last_row; i++) {
      result.push(matrix[i][last_col]);
    }
    last_col--;

    if (row <= last_row) {
      for (var i = last_col; i >= col; i--) {
        result.push(matrix[last_row][i]);
      }
      last_row--;
    }

    if (col <= last_col) {
      for (var i = last_row; i >= row; i--) {
        result.push(matrix[i][col]);
      }
      col++;
    }
  }

  return result;
};
