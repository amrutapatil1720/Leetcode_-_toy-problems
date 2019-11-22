/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

var deepEquals = function(apple, orange) {

  var count = 0;
  if (typeof apple === 'object' && typeof orange === 'object') {
    for (var key in apple) {
      if ((typeof apple[key] === 'number') && (typeof orange[key] === 'number')) {
        count++;
      }
      else {
        for (var i in apple[key])
          if (apple[key][i] === orange[key][i]) {
            count++;
          }
      }

    }
  }
    var size = 0, key;
    for (key in apple) {
      if (apple.hasOwnProperty(key)) size++;
    }
    //     console.log("size of apple",size);
    if (count === size) {
      return true;
    }
    else {
      return false;
    }

  };
