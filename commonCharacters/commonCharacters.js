/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var arr1=string1.split("");
  var arr2=string2.split("");
  var arr3=[];
 for(var i=0;i<arr1.length;i++){
     for(var j=0;j<arr2.length;j++) {
         if(arr1[i]===arr2[j]) {
             arr3.push(arr1[i]);
         }
     }
 }
 
  return arr3.join("");
};
