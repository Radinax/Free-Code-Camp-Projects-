/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

SOLUTION
*/

function translatePigLatin(str) {
  var result = '';
  var consonant= /[aeiou]/gi;

  
  if (str[0].match(consonant)) {  //If the character is a vowel I add the way
    result= str + 'way';

  } else {

    
    var index = str.indexOf(str.match(consonant)[0]); // Find how many consonants before the first vowel.

    result = str.substr(index) + str.substr(0, index) + 'ay'; //I take the first vowel and move it at the end and add the "ay"
  }

  return result;
}

translatePigLatin("consonant");
