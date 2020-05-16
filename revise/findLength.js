/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
//给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度
var findLength = function(A, B) {
    if(A == null || B == null) return 0;
    let res = 0;
    /* 动态规划, dp[i][j]表示以A[0,i-1], B[0,j-1]为结束点的最长重复子数组 */
    /* A[i-1] == B[j-1], dp[i][j] = dp[i-1][j-1] + 1 */
    /* A[i-1] != B[j-1], dp[i][j] = 0                */
    let dp = new Array(A.length+1);
    for(let i = 0; i <= A.length; i++){
        dp[i] = new Array(B.length+1).fill(0);
    }
    for(let i = 1; i < dp.length; i++){
        for(let j = 1; j < dp[i].length; j++){
            dp[i][j] = A[i-1] == B[j-1] ? dp[i-1][j-1] + 1 : 0;
            res = Math.max(res,dp[i][j]);
        }
    }
    return res;
};
