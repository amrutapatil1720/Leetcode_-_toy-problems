/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

var quicksort = function(array) {
      
    var pivot=array[0];
    var array1=[];
    var array2=[];
    var array3=[];
    if(array.length<2)
    {
        return array;
    }
   else {
 for(var i=0;i<array.length-1;i++) {
        if(array[i]>=pivot) {
            array1.push(array[i]);
        }
        else {
            array2.push(array[i]);
        }
    }
   }

 return [quicksort(array1), quicksort(array2)];
   

};




/
//# sourceURL=snippet:///quick%20sort




