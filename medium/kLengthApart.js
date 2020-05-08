/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//给你一个由若干 0 和 1 组成的数组 nums 以及整数 k。如果所有 1 都至少相隔 k 个元素，则返回 True
var kLengthApart = function(nums, k) {
    if(k == 0 || nums.length <= 1) return true;
    let idxBefore = nums.indexOf(1);
    if(idxBefore == -1) return true;
    for(let i = idxBefore + 1; i < nums.length; i++){
        if(nums[i] == 1){
            if(i - idxBefore > k){
                idxBefore = i;
            }else return false;
        }
    }
    return true;
};
