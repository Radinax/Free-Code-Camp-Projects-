/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

If multiple pairs are possible that have the same numeric elements but different indices, return the smallest sum of indices.
Once an element has been used, it cannot be reused to pair with another.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write 
out the array with their indices and values.

Index	0	1	 2	 3	 4
Value	7	9	11	13	15

Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

SOLUTION
*/


function pairwise(arr, arg) {
  var index=[]; //We store the index's of the results we need
  
  if(arr.length===0||typeof arg!=='number'){ //In case the array is empty
    return 0;
  }
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if(i!=j&&arr[i]+arr[j]==arg&&index.indexOf(i)<0&&index.indexOf(j)<0){ //With this we sum every array element with each other
        //If indexOf finds a match, it will return it’s position, if not, it will return -1. This is to not use the same index, for example my array without this looks like this [1,3,2,5,3,1,5,2] so we need to avoid the "3,1" part.
        //Now we get [1,3,2,5] which is what we want!
        index.push(i,j);
        console.log(index);
        break; //We don't need to look anymore
        
      }
    }
  }
  var result=index.reduce(function(a,b){
    return a+b;
  });
  return result;
  }

pairwise([1,4,2,3,0,5], 7);
