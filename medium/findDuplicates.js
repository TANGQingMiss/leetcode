/**
 * @param {number[]} nums
 * @return {number[]}
 */
//给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次
var findDuplicates = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length;i++){
        let item = nums[i];
        if(res.indexOf(item) != -1) continue;
        let idx2 = nums.lastIndexOf(item);
        if(i != idx2) res.push(item);
    }
    return res;
};
