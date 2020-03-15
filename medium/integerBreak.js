/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n == 2) return 1;
    if(n == 3) return 2;
    let a = 1;
    while(n > 4){
        n -= 3;
        a *= 3;
    }
    return a*n;

};
