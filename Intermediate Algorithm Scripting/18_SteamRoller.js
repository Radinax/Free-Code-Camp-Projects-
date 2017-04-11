/*
Flatten a nested array. You must account for varying levels of nesting.

SOLUTION
*/
function steamrollArray(arr) {
  // I'm a steamroller, baby
  //We use Javascript Recursion technique to loop through the array checking each value to see if its an array 
  var newarr=[];
  var Flatten=function(arg){
    if(!Array.isArray(arg)){ //We check if its a digit with this
      newarr.push(arg);
    }else{ //Now we need to check anything that isn't a digit by looping
      for(var i in arg){
        Flatten(arg[i]);
      }
    }
  };
  arr.forEach(Flatten); //We apply our function to every element in arr which in the end creates our result in newarr
  //Another way would be using REGEX to check the array value for digits.
  return newarr;
  }


steamrollArray([1, [2], [3, [[4]]]]);
