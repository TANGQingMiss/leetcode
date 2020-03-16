/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix.length == 0) return 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let max = 0;
    let dp = new Array(row+1);
    for(let i = 0; i < row + 1; i++){
        dp[i] = new Array(col + 1);
        dp[i].fill(0);
    }
    for(let i = 1; i <= row; i++){
        for(let j = 1; j <= col; j++){
            if(matrix[i-1][j-1] == '1'){
                dp[i][j] = 1 + Math.min(dp[i-1][j-1], Math.min(dp[i-1][j], dp[i][j-1]));
                max = Math.max(max,dp[i][j]);
            }
        }
    }
    return max*max;
};
