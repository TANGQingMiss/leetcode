/**
 * @param {number} K
 * @return {number}
 */
//给定正整数 K，你需要找出可以被 K 整除的、仅包含数字 1 的最小正整数 N。
//返回 N 的长度。如果不存在这样的 N，就返回 -1
var smallestRepunitDivByK = function(K) {
    if(K % 2 == 0 || K % 5 == 0) return -1;
    let i = 1;
    for(let n = 1; n % K != 0; i++){
        n %= K;
        n = n * 10 + 1;
    }
    return i;
};
