/**
 * @param {number[][]} pairs
 * @return {number}
 */
//给出 n 个数对。 在每一个数对中，第一个数字总是比第二个数字小。
//现在，我们定义一种跟随关系，当且仅当 b < c 时，数对(c, d) 才可以跟在 (a, b) 后面。我们用这种形式来构造一个数对链
var findLongestChain = function(pairs) {
    if(pairs == null || pairs.length == 0) return 0;
    if(pairs.length == 1) return 1;
    pairs.sort(function(x,y){
        if(x[0] == y[0]){
            return x[1] - y[1];
        }else{
            return x[0] - y[0];
        }
    });
    //dp[i] 表示以pairs[i]结尾的为一条链
    let dp = new Array(pairs.length).fill(1);
    for(let i = 1; i < pairs.length; i++){
        for(let j = 0; j < i; j++){
            if(pairs[j][1] < pairs[i][0]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
    }
    return dp[pairs.length-1];
};
