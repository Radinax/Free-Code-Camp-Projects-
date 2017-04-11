/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

SOLUTION
*/

function convertHTML(str) {
  // &colon;&rpar;
 str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
  
}

convertHTML("Dolce & Gabbana");
