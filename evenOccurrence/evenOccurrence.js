/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  var obj = {};

  arr.forEach(function (num) {

    // if(obj[num])
    // {
    //       obj[num]=obj[num]+1;
    // }
    // else {
    // obj[num]=1;
    // }
    obj[num] = (obj[num] ? obj[num] : 0) + 1;
  });

  for (var i = 0; i < arr.length; i++) {
    if ( obj[ arr[i] ] % 2 === 0 ) {
      return arr[i];
    }
  }

  return null;
};

// var even= evenOccurence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
// console.log(even);