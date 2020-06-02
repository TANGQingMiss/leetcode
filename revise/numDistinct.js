/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//给定一个字符串 S 和一个字符串 T，计算在 S 的子序列中 T 出现的个数
var numDistinct = function(s, t) {
    let m = s.length, n = t.length;
    let dp = new Array(m+1);
    for(let i = 0; i <= m; i++){
        dp[i] = new Array(n+1).fill(0);
        dp[i][0] = 1;
    }
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(j > i) continue;
            if(s.charAt(i-1) == t.charAt(j-1)){
                dp[i][j] = dp[i-1][j-1] + dp[i-1][j];//i-j匹配，考虑i-j和不考虑i-j
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[m][n];
};
