function factorial(n) {
  let result = n;
  if (result === 0){
    return 1;
  } 
  for(let i = 1; i < n; i++){
    result *= (n - i);
  }
  return result;
}
