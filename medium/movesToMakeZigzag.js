/**
 * @param {number[]} nums
 * @return {number}
 */
//给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1
//返回将数组 nums 转换为锯齿数组所需的最小操作次数
var movesToMakeZigzag = function(nums) {
    let len = nums.length;
    if(len < 2) return 0;
    let odd = 0;
    let even = 0;
    for(let i = 0; i < len; i++){
        let left = i - 1 >= 0 ? nums[i-1] : Number.MAX_VALUE;
        let right = i + 1 < len ? nums[i+1] : Number.MAX_VALUE;
        if(i % 2 == 0){
            if(nums[i] >= left || nums[i] >= right){
                even += nums[i] - Math.min(left,right) + 1;
            }
        }else{
            if(nums[i] >= left || nums[i] >= right){
                odd += nums[i] - Math.min(left,right)+1;
            }
        }
    }
    return Math.min(odd,even);
};
