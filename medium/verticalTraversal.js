/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 给定二叉树，按垂序遍历返回其结点值。
// 对位于 (X, Y) 的每个结点而言，其左右子结点分别位于 (X-1, Y-1) 和 (X+1, Y-1)。
// 把一条垂线从 X = -infinity 移动到 X = +infinity ，每当该垂线与结点接触时，我们按从上到下的顺序报告结点的值（ Y 坐标递减）。
// 如果两个结点位置相同，则首先报告的结点值较小
var verticalTraversal = function(root) {
    let helper = (root, x, y, res)=>{
        if(root!=null){
            helper(root.left, x-1, y-1, res)
            res.push({val:root.val, x, y})
            helper(root.right, x+1, y-1, res)
        }
    }
    let res = []
    helper(root, 0, 0, res)
    let map = new Map()
    // 先按x值排序
    // x值相同 再按y从大到小 排序
    // 若x与y都相同时 按val排序
    res.sort((a, b)=>{
        if(a.x==b.x && a.y!=b.y){
            return b.y-a.y
        }
        if(a.x==b.x && a.y==b.y){
            return a.val-b.val
        }
        return a.x-b.x
    })
    res.forEach(item=>{
        if(map.get(item.x)){
            let arr = map.get(item.x)
            arr = [...arr, item.val]
            map.set(item.x, arr)
        }else{
            map.set(item.x, [item.val])
        }
    })
    // console.log(res, map)
    return [...map.values()]
};
