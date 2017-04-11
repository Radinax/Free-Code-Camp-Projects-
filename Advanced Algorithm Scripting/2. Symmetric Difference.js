/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is 
the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric 
difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but 
not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

SOLUTION
*/

function sym() {
  //We first need to convert the ARGUMENTS into ARRAY
  var args = Array.prototype.slice.call(arguments);
  //args is now an array
  //We need to create a function that takes two arrays and see if the element of one exists in the other.
  function SDiff(a1,a2){
    var result=[];
    a1.forEach(function(i){ //We loop the first arg...
      if(a2.indexOf(i)<0 && result.indexOf(i)<0){
        result.push(i);
      }
    });
    //...So we check if an element in a2 exists in a1.
    //We do the same for a2
    a2.forEach(function(i){ 
      if(a1.indexOf(i)<0 && result.indexOf(i)<0){
        result.push(i);
      }
    });
    return result; //In result we get all the values that are unique
  }
 
  return args.reduce(SDiff); //We apply SDyff to every ARRAY element in it completing it for n elements.
 
}

sym([1, 2, 3], [5, 2, 1, 4]);
