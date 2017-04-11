/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

SOLUTION
*/
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  return str.replace(/([a-z])([A-Z])/g,'$1 $2').toLowerCase().replace( /\s+|_+/g,'-');
}

spinalCase('AllThe-small Things');
