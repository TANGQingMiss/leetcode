/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m+1);
    for(let i = 0; i < m+1; i++){
        dp[i] = new Array(n+1);
        dp[i].fill(0);
    }
    //find longest common subsequence
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1]+1;
            }else{
                dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
            }
        }
    }
    return m+n-2*dp[m][n];
};
