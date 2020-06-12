/**
 * @param {number[][]} grid
 * @return {number}
 */
//在二维数组grid中，grid[i][j]代表位于某处的建筑物的高度。 我们被允许增加任何数量（不同建筑物的数量可能不同）的建筑物的高度。 高度 0 也被认为是建筑物。
var maxIncreaseKeepingSkyline = function (grid) {
    // grid: [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
    var cols = []
    var rows = []
    var colsLength = grid.length
    var rowsLength = grid[0].length
    var count = 0
    for (var i = 0; i < colsLength; i++) {
        for (var j = 0; j < rowsLength; j++) {
            var n = grid[i][j]
            cols[i] = cols[i] >= n ? cols[i] : n
            rows[j] = rows[j] >= n ? rows[j] : n
        }
    }
    // 此时：
    // rows:  [ 9, 4, 8, 7 ]
    // cols:  [ 8, 7, 9, 3 ]
    for (var i = 0; i < colsLength; i++) {
        for (var j = 0; j < rowsLength; j++) {
            var n = grid[i][j]
            count += (cols[i] < rows[j] ? cols[i] : rows[j]) - n
        }
    }
    return count
};
