/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/
/*Original Function*/
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
/*Solution
In this case we joined both arrays into one and then filter them really easy using .indexOf and checking if the number is in only one array.
*/
function diffArray(arr1, arr2) {
  var combArr=arr1.concat(arr2);
  var newArr=combArr.filter(function Diff(Data){
    if (arr1.indexOf(Data) === -1 || arr2.indexOf(Data) === -1) {
      return Data;
    }
  });
  
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
