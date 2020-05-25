/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//状态定义
//dp[i][j]：表示 s 的前i个字符是否与 p的前j个字符是否匹配
//状态方程
//当 s[i] == p[j] 或者p[j] == '?' 时
//dp[i][j] = dp[i-1][j-1]
//当 s[i] != p[j] && p[j] == '*' 时
//dp[i][j] = dp[i-1][j] || dp[i][j-1]
//dp[i-1][j]：匹配任意非空字符，例如abkk,ab*
//dp[i][j-1]：匹配空字符相当于0个，例如ab，ab*
//初始化
//dp[0][0]：两个空字符串，为true
//dp[0][j]：当s为空，p为*号时，为true
//p[j-1] == '*' && dp[0][j] = dp[0][j-1]
var isMatch = function(s, p) {
    let n = s.length;
    let m = p.length;
    let dp = Array.from(new Array(n+1),() => new Array(m+1).fill(false));
    dp[0][0] = true;
   for(let j = 1;j <= m;j++){
       if(p[j-1] == '*'){
           dp[0][j] = dp[0][j-1];
       }
   }
    for(let i = 1;i <= n;i++){
        for(let j = 1;j <= m;j++){
            if(s[i-1] == p[j-1] || p[j-1] == '?'){
                dp[i][j] = dp[i-1][j-1];
            }else if(p[j-1] == '*'){
                 dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }
    return dp[n][m];
};
