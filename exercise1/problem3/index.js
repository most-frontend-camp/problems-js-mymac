function pentagonal(num) {
  // Your code
  if(num === 1) {
    return 1;
  }

  let p = 0.5*(5*(num-1)**2 + 5*(num -1) +2) 
  return p;
}

export default pentagonal;


/**
 * # The formula for this sequence is 
 * (5(n-1)^2 + 5(n-1) + 2) / 2

 * n(3n-1)/2
 * n=1 
 * n=2
 * 
 * 8(3*8-1)/2= 4(23)
 *  */