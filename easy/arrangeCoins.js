/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n == 0) return 0;
    let i = 1;
    while(n > 0){
        n -= i;
        if(n >= (i+1)){
            i++;
        }
    }
    return i;
};
