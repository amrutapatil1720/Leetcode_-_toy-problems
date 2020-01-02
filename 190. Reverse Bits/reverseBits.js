/* Leetcode 190- Easy */
/*
Reverse bits of a given 32 bits unsigned integer.

Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, 
so return 964176192 which its binary representation is 00111001011110000010100101000000.
Example 2:

Input: 11111111111111111111111111111101
Output: 10111111111111111111111111111111
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, 
so return 3221225471 which its binary representation is 10111111111111111111111111111111.
*/



/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    
    //convert to binary no
    var bin= Number(n).toString(2);
    
    // make it string and reverse
    var bin_string= bin.toString();
    var reverse_bin= bin_string.split("").reverse().join("").padEnd(32, "0");
    var con_into_num= parseInt(reverse_bin,2);
    return con_into_num;
};