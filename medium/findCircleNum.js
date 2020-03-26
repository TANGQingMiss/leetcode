/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    if(M.length == 0) return 0;
    let visited = new Array(M.length);
    visited.fill(false);
    let res = 0;
    for(let i = 0; i < M.length; i++){
        if(!visited[i]){
            dfs(M,visited,i);
            res++;
        }
    }
    function dfs(M,visited,i){
        for(let j = 0; j < M.length; j++){
            if(M[i][j] == 1 && !visited[j]){
                visited[j] = true;
                dfs(M,visited,j);
            }
        }
    }
    return res;
};
