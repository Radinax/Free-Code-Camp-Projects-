/*
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the 
new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

SOLUTION
*/
function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  //Going to need an array of strings of arr1
  for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
      //Need to update de NUMBERS of arr1
      if(arr1[i][1]===arr2[j][1]){
        arr1[i][0]=arr1[i][0]+arr2[j][0];
      }
    }
  }
  //Now we need to update arr1 with the new items of arr2
  var temp=[];
  //We will create a new array of the names of both arrays.
  for(var k=0;k<arr1.length;k++){
    temp[k]=arr1[k][1]; //Names of arr1
  }
  var temp2=[];
  for(var t=0;t<arr2.length;t++){
    temp2[t]=arr2[t][1]; //Names of arr2
  }
  var ind;
  
  //We use map function to update arr1 using the array of names we made.
  temp2.map(function(item) {
   if (temp.indexOf(item) === -1) {
     ind = temp2.indexOf(item);
     arr1.push(arr2[ind]);
     
   }
  });
  //Finally we need to sort the items
  arr1.sort(function(currItem, nextItem) {
    
    return currItem[1] > nextItem[1] ? 1 : -1;
  });

 
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []);
