/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    let res = [];
    let i = A.length - 1;
    let num = K;
    while(i >= 0 || num > 0){
        if(i >= 0){
            num += A[i];
        }
        res.unshift(num%10);
        num = Math.floor(num/10);
        i--;
    }
    return res;
};
