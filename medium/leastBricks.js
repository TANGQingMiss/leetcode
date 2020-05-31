/**
 * @param {number[][]} wall
 * @return {number}
 */
//你的面前有一堵方形的、由多行砖块组成的砖墙。 这些砖块高度相同但是宽度不同。你现在要画一条自顶向下的、穿过最少砖块的垂线
var leastBricks = function(wall) {
    let map = new Map();
    let res = 0;
    for(let i = 0; i < wall.length; i++){
        let sum = 0;
        for(let j = 0; j < wall[i].length - 1; j++){
            sum += wall[i][j];
            map.set(sum,map.has(sum)? map.get(sum)+1 : 1);
            res = Math.max(res, map.get(sum));//统计边界数最大的位置
        }
    }
    return wall.length - res;
};
