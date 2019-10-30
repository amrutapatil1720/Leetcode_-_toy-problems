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

var rockPaperScissors = function (n) {
  // TODO: your solution 
  var array=[];
  var player=['R', 'S', 'P'];

  for(var i=0;i<player.length;i++){
    for(var j=0;j<player.length;j++) {
      for(var k=0;k<player.length;k++){
             var str=player[i]+player[j]+player[k];
             array.push(str);
      }
    }
  }



             return array;
  
};
//console.log(rockPaperScissors(5));




var rockPaperScissors = function (n) {
  // //Input: n-number of games to be played
  // Output: array conatining all solutions
  
  // constraints:none
  //  cases:none
  
  var result=[];
  //If no children, push value to the array;
  
  var recurse=function(string)
  {
    if(string.length===n){
       result.push(string);
       return;
    }
  //If there are children,keep following the path
  recurse(string + 'R');
  recurse(string + 'P');
  recurse(string + 'S');
  }
  recurse('');
  return result;
  }
  
  // var op=rockPaperScissors(5);
  // console.log(op);

  // Third way
//   rockPaperScissors(5);

// var rockPaperScissors = function (n) {
//     var player=['R','P','S'];
//     console.log(player)
//     var solution=[];
//     RPS(player, solution,"", n);
//     console.log(solution)
    
// }

// var RPS =  function(player, solution, str, n){
//     if(str.length==n){
//         solution.push(str);
//         return;
//     }
//     for(var p=0; p<player.length; p++){
//         //console.log(player)
//         RPS(player, solution, str+player[p], n);
//     }
// }