/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    if(!matrix) return true;
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i < row - 1; i++){
        for(let j = 0; j < col - 1; j++){
            if(matrix[i][j] != matrix[i+1][j+1]){
                return false;
            }
        }
    }
    return true;
};
