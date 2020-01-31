/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums == null || nums.length == 0) return null;
    let mid = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[mid]);

    let left = nums.slice(0,mid);
    let right = nums.slice(mid+1);
    
    node.left = sortedArrayToBST(left);
    node.right = sortedArrayToBST(right);
    return node;
};
