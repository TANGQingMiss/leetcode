/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(N) {
    let res = [];
    if(N % 2 == 0) return res;//even number can't form FBT
    if(N == 1){
        let head = new TreeNode(0);
        res.push(head);
        return res;
    }
    for(let i = 1; i < N; i += 2){
        let left = allPossibleFBT(i);
        let right = allPossibleFBT(N - 1 - i);
        for(l of left){
            for (r of right){
                let root = new TreeNode(0);
                root.left = l;
                root.right = r;
                res.push(root);
            }
        }
    }
    return res;
};
