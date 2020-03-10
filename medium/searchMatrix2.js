/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    if(row == 0) return false;
    let col = matrix[0].length;
    //left-bottom is the smallest in this row,but largest in this column
    let i = row-1;
    let j = 0;
    while(i >= 0 && j < col){
        if(matrix[i][j] == target) return true;
        else if(matrix[i][j] < target) j++;
        else i--;
    }
    return false;
};
