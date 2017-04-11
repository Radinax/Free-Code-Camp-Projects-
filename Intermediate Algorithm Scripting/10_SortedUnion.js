/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

SOLUTION
*/
function uniteUnique(arr) {
  var result=[];
  for(var i=0;i<arguments.length;i++){
    var temp=arguments[i];
    for(var j=0;j<temp.length;j++){
      var w=temp[j];
      if(result.indexOf(w)<0){ //checks if the value is alredy in the array
        result.push(w);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
