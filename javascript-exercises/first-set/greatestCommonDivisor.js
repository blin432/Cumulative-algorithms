//4. Greatest Common Divisor

function greatestCommonDivisor(a, b){
  var divisor = 2, 
      greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}

function greatestCommonDivisor(a, b) {
    var divisor = 2;
    var greatestDivisor = 1;
    
  //handle edge case
    if (a < 2 || b < 2) {
        return 1
    }

    while (a >= divisor && b >= divisor) {
        if (a % divisor == 0 && b % divisor == 0) {
            greatesDivisor = divisor
        }
        divisor ++
    }
    console.log(greatestDivisor)
    return greatestDivisor;
}
