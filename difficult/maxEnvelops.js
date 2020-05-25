/**
 * @param {number[][]} envelopes
 * @return {number}
 */
//给定一些标记了宽度和高度的信封，宽度和高度以整数对形式 (w, h) 出现。当另一个信封的宽度和高度都比这个信封大的时候，这个信封就可以放进另一个信封里，如同俄罗斯套娃一样
var maxEnvelopes = function(envelopes) {
    if(envelopes == null || envelopes.length == 0) return 0;
    if(envelopes.length == 1) return 1;
    envelopes.sort(function(x,y){
        if(x[0] == y[0]){
            return x[1] - y[1];
        }else return x[0] - y[0];
    });
    let res = 1;
    let dp = new Array(envelopes.length).fill(1);
    for(let i = 1; i < envelopes.length; i++){
        for(let j = 0; j < i; j++){
            if(envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]){
                dp[i] = Math.max(dp[i],dp[j]+1);
            }
        }
    res = Math.max(res,dp[i]);
    }
    return res;
};
