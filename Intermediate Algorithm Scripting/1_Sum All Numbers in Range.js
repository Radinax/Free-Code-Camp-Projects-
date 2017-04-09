/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

/*Original Function*/
function sumAll(arr) {
  return 1;
}

sumAll([1, 4]);

/*Solution*/
function sumAll(arr) {
  var a=[];
  for(var i=Math.min(...arr);i<Math.max(...arr);i++){
    arr.push(i);
  }
  return result=arr.reduce(function(a, b) {
  return a + b;
}, 0)-Math.min(...arr);
  
}

sumAll([1, 4]);
