/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

SOLUTION
*/
function dropElements(arr, func) {
  // Drop them elements.
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });
