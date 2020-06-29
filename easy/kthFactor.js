/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
给你两个正整数 n 和 k 。
如果正整数 i 满足 n % i == 0 ，那么我们就说正整数 i 是整数 n 的因子。
考虑整数 n 的所有因子，将它们 升序排列 。请你返回第 k 个因子。如果 n 的因子数少于 k ，请你返回 -1 
var kthFactor = function(n, k) {
    let factor = [];
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            factor.push(i);
        }
    }
    return factor.length < k ? -1 : factor[k-1];
};
