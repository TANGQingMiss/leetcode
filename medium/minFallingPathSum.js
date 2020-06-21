/**
 * @param {number[][]} A
 * @return {number}
 */
// 给定一个方形整数数组 A，我们想要得到通过 A 的下降路径的最小和。
// 下降路径可以从第一行中的任何元素开始，并从每一行中选择一个元素。在下一行选择的元素和当前行所选元素最多相隔一列
var minFallingPathSum = function(A) {
    let rows = A.length
    if(!rows) return 0
    let cols = A[0].length
    if(!cols) return 0

    // 第1层循环同于行的迭代
    // 第2层循环同于列的迭代
    for(let i = 1; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(j === 0) {
                A[i][j] = Math.min(A[i - 1][j], A[i - 1][j + 1]) + A[i][j]
            } else if(j === cols - 1) {
                A[i][j] = Math.min(A[i - 1][j - 1], A[i - 1][j]) + A[i][j]
            } else {
                A[i][j] = Math.min(A[i - 1][j - 1], A[i - 1][j], A[i - 1][j + 1]) + A[i][j]
            }
        }
    }
    return Math.min(...A[rows - 1])
};
