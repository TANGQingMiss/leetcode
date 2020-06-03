/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  let base = 1337;
  
  function myPow(a, k) {
    a %= base;
    let res = 1;
    for (let i = 0; i < k; i++) {
      res *= a;
      res %= base;
    }
    return res;
  }
  
  function mySuperPow(a, b) {
    if (b.length === 0) return 1;
    let last = b.pop();
    
    let part1 = myPow(a, last);
    let part2 = myPow(mySuperPow(a, b), 10);
    
    return (part1 * part2) % base;
  }
  
  
  return mySuperPow(a, b);
};
