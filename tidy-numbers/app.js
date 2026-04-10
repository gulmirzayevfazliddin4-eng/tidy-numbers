function tidyNumber(n){
  let arr = String(n).split("")
  
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] > digits[i + 1]) {
      return false;
    }
  }
  
  return true;
}