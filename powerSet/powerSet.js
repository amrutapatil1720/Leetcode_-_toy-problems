/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

    var arr = [];
    var final = [];
    arr = str.split("");
    var s = "";
    final.push(s);
    for (var i = 0; i < str.length; i++) {
        final.push(str.charAt(i));
        for (var j = i + 1; j < str.length; j++) {
            var s = str[i].concat(str[j]);
            final.push(s);
            if (str.substring(i, j + 1).length > 2) {
                final.push(str.substring(i, j + 1));
            }

        }

    }

    return final;

};
// str="jump";
// var op=powerSet(str);
// console.log(op);