/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n == 0) return [];
    return getTrees(1,n);

    function getTrees(left,right){
        let res = [];
        if(left > right){
            res.push(null);
            return res;
        }
        for(let i = left; i <= right; i++){
            let res_left = getTrees(left,i-1);
            let res_right = getTrees(i+1,right);
            for(let j = 0; j < res_left.length; j++){
                for(let k = 0; k < res_right.length; k++){
                    let node = new TreeNode(i);
                    node.left = res_left[j];
                    node.right = res_right[k];
                    let tmp = node;
                    res.push(tmp);
                }
            }
        }
        return res;
    }
};
