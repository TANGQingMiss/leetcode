/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if(triangle == null || triangle.length == 0) return 0;
    let row = triangle.length;
    let dp = new Array(row+1);
    for(let i = 0; i < dp.length; i++){
        dp[i] = 0;
    }
    for(let i = row - 1; i >= 0; i--){
        let tmp = triangle[i];
        for(let j = 0; j < tmp.length; j++){
            dp[j] = Math.min(dp[j],dp[j+1]) + tmp[j];
        }
    }
    return dp[0];
};
