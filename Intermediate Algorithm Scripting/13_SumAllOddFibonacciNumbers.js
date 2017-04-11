/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

SOLUTION
*/

function sumFibs(num) {
  var temp=1;
  var temp2=0;
  var result=0;
  while(temp<=num){ 
    if(temp%2!==0){
      result+=temp;
    }
    var newfibo=temp+temp2; //I'm getting the new Fibonaci number
    temp2=temp; //Setting up the previous Fibonaci number of the next cycle
    temp=newfibo; //Setting up the next fibonaci number for the next cycle
  }
  return result;
}

sumFibs(4);
