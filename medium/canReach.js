/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let visited = new Array(arr.length);
    visited.fill(false);
    return dfs(arr,visited,start);

    function dfs(arr,visited,start){
        if(start < 0 || start >= arr.length || visited[start] == true){
            return false;
        }
        visited[start] = true;
        if(arr[start] == 0) return true;
        return dfs(arr,visited,start - arr[start]) || dfs(arr,visited,start + arr[start]);
    } 
};
