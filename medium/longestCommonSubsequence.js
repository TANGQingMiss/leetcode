/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
//给定两个字符串 text1 和 text2，返回这两个字符串的最长公共子序列的长度。
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;
    let dp = new Array(m+1);
    for(let i = 0; i <= m; i++){
        dp[i] = new Array(n+1).fill(0);
    }
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(text1.charAt(i-1) == text2.charAt(j-1)){
                dp[i][j] = dp[i-1][j-1] + 1;
            }
            dp[i][j] = Math.max(dp[i-1][j],dp[i][j]);
            dp[i][j] = Math.max(dp[i][j-1],dp[i][j]);
        }
    }
    return dp[m][n];
};
