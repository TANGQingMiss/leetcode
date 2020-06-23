/**
 * @param {number[][]} grid
 * @return {number}
 */
// 你现在手里有一份大小为 N x N 的「地图」（网格） grid，上面的每个「区域」（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，请你找出一个海洋区域，这个海洋区域到离它最近的陆地区域的距离是最大的。
// 我们这里说的距离是「曼哈顿距离」（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1|
var maxDistance = function (grid) {
    if (grid.length < 2) return -1
    let n = grid.length;
    // 创建 dp 状态矩阵
    let dp = new Array(n);
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = (grid[i][j] ? 0 : Infinity);
        }
    }
    // 从左上向右下遍历
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) continue
            if (i - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1);
            if (j - 1 >= 0) dp[i][j] = Math.min(dp[i][j], dp[i][j - 1] + 1);
        }
    }
    // 从右下向左上遍历
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j]) continue
            if (i + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i + 1][j] + 1);
            if (j + 1 < n) dp[i][j] = Math.min(dp[i][j], dp[i][j + 1] + 1);
        }
    }
    let ans = -1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (!grid[i][j]) ans = Math.max(ans, dp[i][j]);
        }
    }
    if (ans === Infinity) {
        return -1
    } else {
        return ans
    }
};
