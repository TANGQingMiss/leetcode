/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] != 0){
                matrix[i][j] = Number.MAX_VALUE;
                if(i>0) matrix[i][j] = Math.min(matrix[i][j],matrix[i-1][j]+1);
                if(j>0) matrix[i][j] = Math.min(matrix[i][j],matrix[i][j-1]+1);
            }
        }
    }
        for(let i = matrix.length-1; i >= 0; i--){
            for(let j = matrix[0].length-1; j >= 0; j--){
                if(matrix[i][j] != 0){
                if(i<matrix.length-1) matrix[i][j] = Math.min(matrix[i][j],matrix[i+1][j]+1);
                if(j<matrix[0].length-1) matrix[i][j] = Math.min(matrix[i][j],matrix[i][j+1]+1);
                }
            }
        }
    return matrix;
};
