/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

SOLUTION
*/

function addTogether() {
  //We first need to identify if the arguments are numbers, we're using TypeOf
  var identify=function isNumber(n) { 
    if(typeof n!=="number"){
      return undefined;
     }else{
       return n;
     } 
    
  } ;
  //Now we need to check the numbers of arguments given
  if(arguments.length>1){
    var a1=identify(arguments[0]);
    var a2=identify(arguments[1]);
    if(a1===undefined||a2===undefined){
      return undefined;
    }else{
      return a1+a2;
    }
  }else{  //Now what happens when we're only given one?
    var a3=arguments[0]; //We store the first one
    if(identify(a3)){
      return function check(arg2){ //With this we're expecting a second argument now
        if(a3===undefined||identify(arg2)===undefined){ 
          return undefined;
        }else{
          return a3+arg2;
        }
      };
    }
  } 
    
  
  

}

addTogether(2,3);
