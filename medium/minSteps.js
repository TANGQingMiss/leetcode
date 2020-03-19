/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if(n == 1) return 0;
    let maxFactor = 1;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            maxFactor = i;
            break;
        }
    }
    if(maxFactor == 1) return n;//n is prime number
    return maxFactor + minSteps(n / maxFactor);
};
