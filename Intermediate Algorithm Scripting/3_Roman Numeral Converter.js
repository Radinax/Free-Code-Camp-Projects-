/*ROMAN NUMERICAL CONVERTER
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
/*
SOLUTION

function convertToRoman(num) {
 var RS=[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000, 2000, 3000, 4000];
 var RS2=['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M','MM','MMM','MMMM'];
 var result='';
 var temp=num;
 while(num>0){
   for(var i=0;i<RS.length+1;i++){
     while (RS[i] <= num&&RS[i+1]>num) { //Check the "num" between the RS array
      
          result += RS2[i]; //Make a result string with the equivalent value
          num -= RS[i]; //This is to reduce the num number until it meets zero, in 36 case it turn into 26->16 so we get XXX then the same goes on when it reaches 6 where we get V and when its 1 and the final I.
      }}
          
   }
 return result;
}

convertToRoman(36);
*/
