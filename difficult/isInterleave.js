/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
//给定三个字符串 s1, s2, s3, 验证 s3 是否是由 s1 和 s2 交错组成的
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length != s3.length) return false;
    let n1 = s1.length, n2 = s2.length;
    let dp = new Array(n1+1);
    //dp[i][j]表示s1[0~i-1]和s2[0~j-1]能否交错组成s3[0~i+j-1]
    for(let i = 0; i <= n1; i++){
        dp[i] = new Array(n2+1).fill(false);
    }
    dp[0][0] = true;
    for(let i = 1; i <= n1; i++){
        dp[i][0] = dp[i-1][0] && (s1[i-1] == s3[i-1]);
    }
    for(let i = 1; i <= n2; i++){
        dp[0][i] = dp[0][i-1] && (s2[i-1] == s3[i-1]);
    }
    for(let i = 1; i <= n1; i++){
        for(let j = 1; j <= n2; j++){
            dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i-1+j]) || (dp[i][j-1] && s2[j-1] == s3[i-1+j]);
        }
    }
    return dp[n1][n2];
};
