/**
 * @param {number[]} nums
 * @return {number}
 */
//给你一个二进制数组 nums ，你需要从中删掉一个元素。
//请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度
var longestSubarray = function(nums) {
        let ret = 0;
        let a = 0;
        let b = 0;
        let n = nums.length;
        for (let i = 0; i < n; ++i) {
            if (nums[i] == 1) {
                ++a;
                ++b;
                ret = Math.max(ret, a);
            } else {
                a = b;
                b = 0;
            }
        }
        if (ret == n) ret--;
        return ret;
};
