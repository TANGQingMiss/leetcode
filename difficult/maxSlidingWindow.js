/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
//返回滑动窗口中的最大值
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    if(n == 0) return [];
    if(k == 1) return nums;
    let res = [];
    let left = new Array(n),right = new Array(n);
    left[0] = nums[0];
    right[n-1] = nums[n-1];
    for(let i = 1;i < n;i++){
        if(i % k == 0) left[i] = nums[i];
        else left[i] = Math.max(left[i-1],nums[i]);
        let j = n - i - 1;
        if((j + 1) % k == 0) right[j] = nums[j];
        else right[j] = Math.max(right[j + 1],nums[j]);
    }
    for(let i = 0;i < n - k + 1;i++){
        res[i] = Math.max(left[i + k - 1],right[i]);
    }
    return res;
};
