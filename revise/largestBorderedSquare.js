/**
 * @param {number[][]} grid
 * @return {number}
 */
//给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0
var largest1BorderedSquare = function(grid) {
  let maxSide = 0;
  const yMax = grid.length, xMax = grid[0].length;
  const dp = [...new Array(yMax + 1)].map(item => ([...new Array(xMax + 1)]).map(item => ([0, 0])))

  for (let j = 1; j <= yMax; j ++) {
    for (let i = 1; i <= xMax; i ++) {
      if (grid[j - 1][i - 1] == 1) {
        dp[j][i][0] = dp[j][i - 1][0] + 1
        dp[j][i][1] = dp[j - 1][i][1] + 1
        let sideLength = Math.min(dp[j][i][0], dp[j][i][1])
        while (sideLength > 1) {
          if (dp[j][i - sideLength + 1][1] >= sideLength && dp[j - sideLength + 1][i][0] >= sideLength) break;

          sideLength -= 1
        }
        maxSide = Math.max(sideLength, maxSide)
      }
    }
  }

  return maxSide * maxSide;
};
