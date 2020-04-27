/**
 * @param {number[][]} matrix
 * @return {number}
 */
//给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数
var countSquares = function(matrix) {
    if(!matrix || !matrix.length) return 0;
    let row = matrix.length;
    let col = matrix[0].length;
    let m = [...new Array(row+1)].map(()=>Array(col+1).fill(0));
    let res = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j]){
                m[i+1][j+1] = Math.min(m[i][j],m[i+1][j],m[i][j+1]) + 1;
                res += m[i+1][j+1];
            }
        }
    }
    return res;
};
