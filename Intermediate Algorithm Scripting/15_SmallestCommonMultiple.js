/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

SOLUTION
*/
function smallestCommons(arr) {
  arr.sort(function(a, b){return b-a;}); 
  var multipleArr1=[];
  for(var i=arr[0];i>=arr[1];i--){ 
    multipleArr1.push(i);
  }
  var temp=1;
  var j=1; //So I can start checking from the second number of the array
  var temp2=multipleArr1[0];
  var result=0;
  //We're going to use the Euclides Method
  for(j;j<multipleArr1.length;j++){
    var n=multipleArr1[j];
    var m=temp2;
    while(temp2&&n){
      if(temp2>n){
        temp2%=n;
      }else{
        n%=temp2;
      }
    }
    temp2=m*multipleArr1[j]/(temp2+n);
  }
  
  
  
  return temp2;
  
}


smallestCommons([1,3]);
