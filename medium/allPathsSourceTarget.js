/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
//给一个有 n 个结点的有向无环图，找到所有从 0 到 n-1 的路径并输出（不要求按顺序）
var allPathsSourceTarget = function(graph) {
    let res = [];
    let path = [];
    help(graph,0,path);
    return res;

    function help(graph,v,path){
        path.push(v);
        if(v == graph.length - 1) res.push(path.slice(0));
        for(let i = 0; i < graph[v].length; i++){
            help(graph,graph[v][i],path);
        }
        path.pop();
    }
};
