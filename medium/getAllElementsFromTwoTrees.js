/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let res = [];
    function inorder(root){
        if(root){
            inorder(root.left);
            res.push(root.val);
            inorder(root.right);
        }
    }
    inorder(root1);
    inorder(root2);
    return res.sort(function(x,y){return x - y;});
    // while(root1.length > 0 || root2.length > 0){
    //     if(root1.length == 0){
    //         res.concat(root2);
    //         return res;
    //     }
    //     if(root2.length == 0){
    //         res.concat(root1);
    //         return res;
    //     }
    //     else{
    //         let tmp1 = root1[0];
    //         let tmp2 = root2[0];
    //         if(tmp1 <= tmp2){
    //             res.push(tmp1);
    //             root1.shift();
    //         }else{
    //             res.push(tmp2);
    //             root2.shift();
    //         }
    //     }
    // }
    // return res;
};
