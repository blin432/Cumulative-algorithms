//Question: How do get nth Fibonacci number?


function fibonacci(n){
  var fib = [0, 1];
  
  if (n <= 2) return 1;

  for (var i = 2; i <=n; i++ ){
   fib[i] = fib[i-1]+fibo[i-2];
  }
  console.log(fib[n])
 return fib[n];
} 

//recursive solutiion

function fibonacci2(n){
  if(n<=1)
    return n;
  else
    return fibonacci2(n-1) + fibonacci2(n-2);  
}
