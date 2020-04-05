/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutation = function(n, k) {
    let res = "";
    k--;
    let arr =[1,2,3,4,5,6,7,8,9];
    let factorials = [1,1,2,6,24,120,720,5040,40320,362880];
    while(n){
        let factorial = factorials[n-1];
        let num = Math.floor(k / factorial);
        res += arr[num];
        arr.splice(num,1);
        k %= factorial;
        n--;
    }
    return res;
};
