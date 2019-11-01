/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.  

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
 var Stack = function() {
  var mainObj={};
var obj=[];

var size=0;
// add an item to the top of the stack
mainObj.push = function(value) {
    obj[size]=value;
    size++;
};

// remove an item from the top of the stack
mainObj.pop = function() {
    if(size===0)
    {
        return "stack empty";
    }
    else {
        var temp=obj[size-1];
         delete obj[size];
         size--;
    }
   return temp;
};

// return the number of items in the stack
mainObj.size = function() {
    return size;
};

// return the minimum value in the stack
mainObj.min = function() {
    for(var i=0;i<size;i++) {
        var temp=obj[i];
            if(obj[i]<temp) {
                 var temp=obj[i];
            }
    }
            return temp;
}

return mainObj;
};

// console.log('tests');
// var example = new Stack();
// example.push(4);
// example.push(3)
// example.min() 
// example.push(3)
// example.push(2)
// example.push(2)
// example.min() 