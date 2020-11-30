//2. Prime Factors



function primeFactors(n) {
    //increasing divisor until you find all numbers with no remainder
  var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
console.log(factors)
  return factors;
}

function primeFactors(n) {
    //we will increase number after 2 to find all numbers with no remainders 
    var factors = [];
    var divisor = 2;

    while (n > 2) {
        if (n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        else {
            divisor++
        }
    }
    console.log(factors)
    return factors;
}