/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
//你可以对一个单词进行如下三种操作：
//插入一个字符,删除一个字符,替换一个字符
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dp = new Array(m+1);
    for(let i = 0; i <= m; i++){
        dp[i] = new Array(n+1).fill(0);
    }
    for(let i = 0; i <= m; i++){
        dp[i][0] = i;
    }
    for(let j = 0; j <= n; j++){
        dp[0][j] = j;
    }
    //word1[0..i] 变换成 word2[0..j] 主要有三种手段
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(word1[i-1] == word2[j-1]){
                dp[i][j] = dp[i-1][j-1];
            }else{
                dp[i][j] = 1 + Math.min(dp[i-1][j-1],Math.min(dp[i][j-1],dp[i-1][j]));
            }
        }
    }
    return dp[m][n];
};
