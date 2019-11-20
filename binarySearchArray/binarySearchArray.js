/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
    var start = 0;
    var end = array.length - 1;
    var mid = Math.floor((start + end) / 2);

    if (target === array[mid]) {
        return mid;
    }
    else if (target > array[mid]) {
        binarySearch(array.slice(mid), target);
    }
    else if (target < array[mid]) {
        binarySearch(array.slice(0, mid), target);
    }
     
};

