/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    if(strs.length == 0) return 0;
    let dp = new Array(m+1);
    //dp[i][j] -> max form use i 0 and j 1 
    for(let i = 0; i < m+1; i++){
        dp[i] = new Array(n+1).fill(0);
    }

    for(let i = 0; i < strs.length; i++){
        let zero = 0;
        let one = 0;
        for(let j = 0; j < strs[i].length; j++){
            strs[i][j] == '0' ? zero++ : one++;
        }
        for(let k = m; k >= zero; k--){
            for(let p = n; p >= one; p--){
                dp[k][p] = Math.max(dp[k][p],1+dp[k-zero][p-one]);
            }
        }
    }
    return dp[m][n];
};
