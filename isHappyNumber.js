/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n==1) return true;
    if(n>1&&n<5) return false;
    let res = 0;
    while(n > 0){
        res += (n%10)*(n%10);
        n  = Math.floor(n/10);
    }
    return isHappy(res);
};
