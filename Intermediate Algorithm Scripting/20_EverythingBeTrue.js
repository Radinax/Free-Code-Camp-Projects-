/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

SOLUTION
*/

function truthCheck(collection, pre) {
  // Is everyone being true?
  //I need to know COLLECTION's size
  var size = Object.keys(collection).length;
  var count=0;
  var temp=pre.toString;
  //We need to loop through the object to know if every sentence is true with COUNT.
  for(var i=0;i<size;i++){
    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
      count+=1;
    }
  }
  //Now we check if everyone is being true.
   if(count===size){
    return true;
  }else{
    return false;
  }
  
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
