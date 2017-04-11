/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of
them (aba and aba) don't have the same letter (in this case a) repeating.

SOLUTION
*/

function permAlone(str) {
  //From what I can understand I need every combinations posible and eliminate those strings that have consecutive letters or numbers.
  //We use the Heap's Algorithm
  //======================================
  function heap(string) {
    var arr = string.split(''),
    permutations = [];
 
    function gen(n) {
      if (n === 1) { //We use n as the length of the array
        permutations.push(arr.join('')); //Output A
      
      } else {
        for (var i = 0; i != n; i++) {
          gen(n - 1);
          //Now I need to swap values
          var temp = arr[n % 2 ? 0 : i];
          arr[n % 2 ? 0 : i] = arr[n-1];
          arr[n-1] = temp;
         
        
        }
      }
    }
  gen(arr.length);
  return permutations;
  }
  //=========================================
  //Now I need to use REGEX to filter the consecutive letters, this easy done with RefExp "." Metacharacter
  var Meta=/(.)\1/; //With only matching two letters ONE TIME is enough to discard
  //We need to use the filter method with our Meta var to return the numbers of No Repeated Permuations
  
  var result=heap(str).filter(function(permu){
    return !Meta.test(permu);
  });
  
  return result.length;
}
  
 

permAlone('aab');
