/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function (string) {
  var arr = string.split("");
  var final = [];
  // Your code here.
  for (var i = 0; i < arr.length; i++) {
    var arr1 = [];
    for (var j = i + 1; j < arr.length; j++) {
      for (var k = 0; k < arr.length; k++) {
        arr1.push(arr[i], arr[j], arr[k]);

      }

    }
    final.push(arr1);
    var str = "";
    var result = [];
    var count = 0;
    for (var i = 0; i < final.length; i++) {

      if (count % 3 !== 0) {
        str = str + arr[i];
        count++;
      }
      result.push(str);
    }
  }
  return final;
};
