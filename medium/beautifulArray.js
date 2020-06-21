/**
 * @param {number} N
 * @return {number[]}
 */
// 对于某些固定的 N，如果数组 A 是整数 1, 2, ..., N 组成的排列，使得：
// 对于每个 i < j，都不存在 k 满足 i < k < j 使得 A[k] * 2 = A[i] + A[j]。
// 那么数组 A 是漂亮数组
var beautifulArray = function(N) {
    if(N == 1) return [1];
    let res = [];
    let tmp1 = beautifulArray(Math.floor((N+1)/2));
    for(let i = 0; i < tmp1.length; i++){
        res.push(tmp1[i]*2-1);
    }
    let tmp2 = beautifulArray(Math.floor(N/2));
    for(let i = 0; i < tmp2.length; i++){
        res.push(tmp2[i]*2);
    }
    return res;
};
