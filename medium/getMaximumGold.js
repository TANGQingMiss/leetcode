/**
 * @param {number[][]} grid
 * @return {number}
 */
// 每当矿工进入一个单元，就会收集该单元格中的所有黄金。
// 矿工每次可以从当前位置向上下左右四个方向走。
// 每个单元格只能被开采（进入）一次。
// 不得开采（进入）黄金数目为 0 的单元格。
// 矿工可以从网格中 任意一个 有黄金的单元格出发或者是停止
var getMaximumGold = function(grid) {
    let m = grid.length;
    if(m == 0) return 0;
    let n = grid[0].length;
    let res = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j]!=0) res = Math.max(res,dfs(grid,i,j,0));
        }
    }
    function dfs(grid,i,j,sum){
        if(i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0) return sum;
        let tmp = grid[i][j];
        grid[i][j] = 0;
        let a = dfs(grid,i+1,j,sum+tmp);
        let b = dfs(grid,i-1,j,sum+tmp);
        let c = dfs(grid,i,j+1,sum+tmp);
        let d = dfs(grid,i,j-1,sum+tmp);
        grid[i][j] = tmp;
        return Math.max(Math.max(a,b),Math.max(c,d));
    }
    return res;
};
