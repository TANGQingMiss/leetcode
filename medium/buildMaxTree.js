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
const findMaxIndex = nums => nums.indexOf(Math.max(...nums));
var constructMaximumBinaryTree = function(nums) {
    if(nums.length == 0) return null;
    let idx = findMaxIndex(nums);
    let root = new TreeNode(nums[idx]);
    root.left = constructMaximumBinaryTree(nums.slice(0,idx));
    root.right = constructMaximumBinaryTree(nums.slice(idx+1));
    return root;
};

