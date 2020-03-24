/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    let start = 1;
    let interval = 1;
    let asc = true;
    while(n > 1){
        if(asc || n % 2 == 1){
            start = start + interval;
        }
        n >>= 1;
        interval <<= 1;
        asc = !asc;
    }
    return start;
};
