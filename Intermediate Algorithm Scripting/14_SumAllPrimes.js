/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

SOLUTION
*/

function sumPrimes(num) {
  function getPrimes(max) { //A function to get an array of prime numbers 
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }
  var result=0;
  var temp=getPrimes(num);
  for(var k=0;k<temp.length;k++){
    result+=temp[k];
  }
  return result;
}

sumPrimes(10);
