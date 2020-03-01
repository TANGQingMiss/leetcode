/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = [];
    let cols = [];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] == 0){
                rows.push(i);
                cols.push(j);
            }
        }
    }

    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            matrix[rows[i]][j] = 0;
        }
    }
    for(let i = 0; i < cols.length; i++){
        for(let j = 0; j < matrix.length; j++){
            matrix[j][cols[i]] = 0;
        }
    }
    return;
};
