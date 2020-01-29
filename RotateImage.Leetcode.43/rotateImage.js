/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

*/

var rotate = function(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = i; j < matrix[i].length; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  var row = matrix.length;
  var col = matrix[0].length;
  var k = 0;

  for (var j = row - 1; j >= matrix.length / 2; j--) {
    for (var i = 0; i < col; i++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[i][k];
      matrix[i][k] = temp;
    }
    k++;
  }

  return matrix;
};

// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(rotate(matrix));
