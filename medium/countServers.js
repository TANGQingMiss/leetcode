/**
 * @param {number[][]} grid
 * @return {number}
 */
//这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。
//如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信
var countServers = function(grid) {
    let row = grid.length;
    if(row == 0) return 0;
    let col = grid[0].length;
    if(col == 0) return 0;
    let res = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] == 1){
                let canCommunicate = false;
                for(let x = 0; x < row; x++){
                    if(x != i && grid[x][j] == 1){
                        canCommunicate = true;
                        break;
                    }
                }
                if(canCommunicate == false){
                    for(let y = 0; y < col; y++){
                        if(y != j && grid[i][y] == 1){
                            canCommunicate = true;
                            break;
                        }
                    }
                }
                if(canCommunicate) res++;
            }
        }
    }
    return res;
};
