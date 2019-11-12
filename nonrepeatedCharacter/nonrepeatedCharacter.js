/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var obj = {};

  for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = true;
    } else {
      obj[string[i]] = false;
    }
  }

  var i = 0;
  while (obj[string[i]] === false) {
    i++;
  }
  return string[i];
};
