/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    if(row <= 2 || col <= 2) return 0;
    let res = 0;
    for(let i = 1; i < row - 1; i++){
        for(let j = 1; j < col - 1; j++){
            if(grid[i][j] == 5){
               res += grid[i - 1][j - 1] * grid[i - 1][j] * grid[i - 1][j + 1] * 
               grid[i][j - 1] * grid[i][j]* grid[i][j + 1] * grid[i + 1][j - 1] 
               * grid[i + 1][j] * grid[i + 1][j + 1] == 362880
			    && grid[i - 1][j - 1] + grid[i - 1][j] + grid[i - 1][j + 1] == 15
				&& grid[i][j - 1] + grid[i][j] + grid[i][j + 1] == 15
				&& grid[i + 1][j - 1] + grid[i + 1][j] + grid[i + 1][j + 1] == 15
				&& grid[i - 1][j - 1] + grid[i][j - 1] + grid[i + 1][j - 1] == 15
			    && grid[i - 1][j] + grid[i][j] + grid[i + 1][j] == 15
				&& grid[i - 1][j + 1] + grid[i][j + 1] + grid[i + 1][j + 1] == 15
				&& grid[i - 1][j - 1] + grid[i][j] + grid[i + 1][j + 1] == 15
				&& grid[i - 1][j + 1] + grid[i][j] + grid[i + 1][j - 1] == 15 ? 1 : 0;
            }
        }
    }
    return res;
};
