/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(!node) return node;
    let map = new Map();
    function dfs(node){
        if(!map.has(node)){
            map.set(node,new Node(node.val,[]));
            map.get(node).neighbors = node.neighbors.map(v => dfs(v));
        }
        return map.get(node);
    }
    return dfs(node);
};
