/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length == 3) return nums[0]*nums[1]*nums[2];
    nums = nums.sort(function(x,y){return x - y;});
    let len = nums.length;
    return Math.max(nums[0]*nums[1]*nums[len - 1],nums[len - 1]*nums[len -2]*nums[len -3]);
};
