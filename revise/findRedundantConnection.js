/**
 * @param {number[][]} edges
 * @return {number[]}
 */
//在本问题中, 树指的是一个连通且无环的无向图
var findRedundantConnection = function(edges) {
let n = edges.length;
    let parent = new Array(n);

    for(let i = 0; i <n; i++) {
        parent[i] = i;
    }

    for(let i = 0; i < n; i++) {
        let edge = edges[i];
        if(connected(edge[0], edge[1])) {
            return edge;
        }
        union(edge[0], edge[1]);
    }

    function connected(a, b) {
        return find(a) === find(b);
    }

    function union(a, b) {
        let rootA = find(a);
        let rootB = find(b);

        if(rootA === rootB) {
            return;
        }else{
            parent[rootA] = rootB;
        }
    }

    function find(a) {
        while(parent[a] !== a) {
            parent[a] = parent[parent[a]];
            a = parent[a]; 
        }
        return a;
    }
};
