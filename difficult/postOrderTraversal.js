/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//let res = [];
var postorderTraversal = function(root) {
    // if(root){
    //     postorderTraversal(root.left);
    //     postorderTraversal(root.right);
    //     res.push(root.val);
    // }
    // return res;
    let stack = [];
	let is = [];
    let res = [];
	let p = root;
	let flag;
	if(root){
		do{
			while(p){
				stack.push(p);
				is.push(0);
				p = p.left;
			}
			p = stack.pop();
			flag = is.pop();
			if(flag==0){
				stack.push(p);
				is.push(1);
				p = p.right;
			}else{
				res.push(p.val)
				p = null;
			}
		}while(p || stack.length > 0);
	}
    return res;
};
