/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let res = 0;
    let row = grid.length;
    let col = grid[0].length;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                res += 4;
                if(i < row - 1 && grid[i+1][j] == 1) res -= 2;
                if(j < col - 1 && grid[i][j+1] == 1) res -= 2;
            }
        }
    }
    return res;
};
