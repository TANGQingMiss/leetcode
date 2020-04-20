/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
//给定一组 N 人（编号为 1, 2, ..., N）， 我们想把每个人分进任意大小的两组。
//每个人都可能不喜欢其他人，那么他们不应该属于同一组
var possibleBipartition = function(N, dislikes) {
    if(N == 1 || dislikes.length <= 1) return true;
    let map = new Map();
    let colors = new Array(N+1).fill(0);
    for(let i = 1; i <= N; i++){
        map.set(i,[]);
    }
    for(const tmp of dislikes){
        map.get(tmp[0]).push(tmp[1]);
        map.get(tmp[1]).push(tmp[0]);
    }
    for(let i = 1; i <= N; i++){
        if(colors[i] == 0 && !dfs(i,1)) return false;
    }
    return true;

    function dfs(i,color){
        colors[i] = color;
        for (let index of map.get(i)) {
            if (colors[index] == color) return false;
            if (colors[index] == 0 && !dfs(index, -color)) return false;
        }
        return true;
    }
};
