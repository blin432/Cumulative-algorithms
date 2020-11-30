//1. check Prime


function isPrime(n){
  var divisor = 2;

  while (n > divisor){
      if (n % divisor == 0) {
        console.log(false)
     return false; 
    }
    else
        
      divisor++;
    }
    console.log(true)
  return true;
}

// faster way

function isPrime(n)
{
    var divisor = 3, 
      //limit is square root because any number will not be divisible by a number bigger than half of it
      limit = Math.sqrt(n);
  
  //check simple cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit)
  {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}