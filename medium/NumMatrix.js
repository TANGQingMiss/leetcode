/**
 * @param {number[][]} matrix
 */
let sum = [];
var NumMatrix = function(matrix) {
    if(matrix.length == 0) return;
    let row = matrix.length;
    let col = matrix[0].length;

    for(let i = 0; i < row; i++){
        sum[i] = new Array(col).fill(0);
        for(let j = 0; j < col; j++){
            if(i) sum[i][j] += sum[i-1][j];
            if(j) sum[i][j] += sum[i][j-1];
            if(i && j) sum[i][j] -= sum[i-1][j-1];
            sum[i][j] += matrix[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let res = sum[row2][col2];
    if(row1) res -= sum[row1-1][col2];
    if(col1) res -= sum[row2][col1-1];
    if(row1 && col1) res += sum[row1-1][col1-1];
    return res;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
