/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    if(n <= 1) return 1;
    let count = 0;
    //calculate number of prime
    const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
                    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for(let i = 0; i < prime.length; i++){
        if(prime[i] <= n){
            count++;
        }else{
            break;
        }
    }

    let res = 1;
    for(let i = 1; i <= count; i++){
        res *= i;
        res %= 10 ** 9 + 7;
    }
    for(let i = 1; i <= n - count; i++){
        res *= i;
        res %= 10 ** 9 + 7;
    }
    return res;

};
