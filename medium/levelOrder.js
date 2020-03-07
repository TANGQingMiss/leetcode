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
var levelOrder = function(root) {
    // let res = [];
    // function traversal(root,res,level){
    //     if(root == null) return;
    //     if(res.length == level) res.push([]);
    //     res[level].push(root.val);
    //     traversal(root.left,res,level+1);
    //     traversal(root.right,res,level+1);
    // }
    // traversal(root,res,0);
    // return res;

    //method 2: use stack
    let res = [];
    if(!root){
        return res;
    }
    var stack = [root];
    while (stack.length > 0) {
        var newCheckArr = [];
        let tmp = [];
        for (var i = 0; i < stack.length; i++) {
            let item = stack[i];
            tmp.push(item.val);
            item.left && newCheckArr.push(item.left);   
            item.right && newCheckArr.push(item.right); 
        }
        res.push(tmp);
        stack = newCheckArr;
    }
    return res;
};
