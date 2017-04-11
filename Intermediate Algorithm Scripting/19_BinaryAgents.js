/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.

SOLUTION
*/
function binaryAgent(str) {
  //We first need to convert from Binary to Decimal
  //To do that we need to transform this string into array's
  var R=str.split(' ');
  var Array=[];
  var result=[];
  var temp='';
  //With ParseInt we turn the binary numbers into Decimal
  for(var i=0;i<R.length;i++){ 
    var digit = parseInt(R[i], 2);
    Array.push(digit);
    temp=temp+String.fromCharCode(Array[i]);
    
  }
  //Finally we need to change from Decimal to ASCII
  
  return temp;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

