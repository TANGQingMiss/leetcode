/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid.length == 0) return 0;
    let row = obstacleGrid.length;
    let col =obstacleGrid[0].length;
    if(obstacleGrid[0][0] == 1 || obstacleGrid[row-1][col-1] == 1) return 0;
    let dp = new Array(row);
    for(let i = 0; i < row; i++){
        dp[i] = new Array(col);
        dp[i].fill(0);
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0;
            }else{
                if(i == 0 && j == 0) dp[i][j] = 1;
                else if(i == 0) dp[i][j] = dp[i][j-1];
                else if(j == 0) dp[i][j] = dp[i-1][j];
                else dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[row-1][col-1];
};
