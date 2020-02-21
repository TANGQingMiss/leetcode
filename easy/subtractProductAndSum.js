/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    if(n <= 9) return 0;
    let product = 1;
    let sum = 0;
    while(n > 0){
        let tmp = n % 10;
        sum += tmp;
        product *= tmp;
        n = Math.floor(n / 10);
    }
    return product - sum;
};
