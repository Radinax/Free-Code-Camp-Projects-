/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

SOLUTION
*/
function fearNotLetter(str) {
  var ASCII=[];
  var compare=[];
  for(var i=97;i<122;i++){
    ASCII.push(String.fromCharCode(i));
  }
  
  for(var j=0;j<ASCII.length;j++){
    if(str[0]===ASCII[j]){
      for(var k=j;k<str.length;k++){
        compare.push(ASCII[k]);
      }
     if(compare===str){
       return undefined;
     }else{
       for(var m=0;m<str.length;m++){
         if(compare[m]!=str[m]){
           return compare[m];
         }
       }
     }
      
    }
   
  }
  
  
  
}

fearNotLetter("abce");
