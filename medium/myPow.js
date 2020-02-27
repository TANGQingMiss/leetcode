/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n == 0) return 1;
    if(n < 0) {
        return 1/myPow(x,-n);
    }
    let mid = myPow(x,Math.floor(n/2));
    if( n & 1) return mid * mid * x;
    return mid * mid;
};
