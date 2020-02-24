/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let res = 0;
    let row = grid.length;
    let col = grid[0].length;
    //top - while grid[i][j] != 0
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] > 0) res++;
        }
    }

    //front,find maximum of each col
    for(let j = 0; j < col; j++){
        let max = grid[0][j];
        for(let i = 1; i < row; i++){
            if(grid[i][j] > max){
                max = grid[i][j];
            }
        }
        res += max;
    }

    //side,find maximum of each row
    for(let i = 0; i < row; i++){
        let max = grid[i][0];
        for(let j = 1; j < col; j++){
            if(grid[i][j] > max){
                max = grid[i][j];
            }
        }
        res += max;
    }
    return res;
};
