/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0;
    if(grid.length == 0) return res;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1){
                res = Math.max(res,dfs(grid,i,j));
            }
        }
    }
    return res;
    function dfs(grid,i,j){
        if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0){
            return 0;
        }
        grid[i][j] = 0;
        let cnt = 1;
        cnt += dfs(grid,i+1,j);
        cnt += dfs(grid,i-1,j);
        cnt += dfs(grid,i,j+1);
        cnt += dfs(grid,i,j-1);
        return cnt;
    }
};
