/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (vlue) {
  // TODO: your solution 
  var array=[];
  var player=['RRRRR', 'RRRRP', 'RRRRS'];

  for(var i=0;i<player.length;i++)
    for(var j=0;j<player.length;j++)
      for(var k=0;k<player.length;k++)
             array.push(player[k]);
             array.push(player[j]);
             array.push(player[i]);



             return array;
  
};
//console.log(rockPaperScissors(5));

//another way 

// var rockPaperScissors = function (vlue) {
// var array=[];
// var player=['RRRRR', 'RRRRP', 'RRRRS'];
//read random element from player array at random index value and push it to resulting arrray
//var ran= player[Math.floor(Math.random() * player.length)];
//array.push(ran);
//return array;
// }
