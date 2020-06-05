/**
 * @param {number[]} nums
 * @return {number}
 */
// 索引从0开始长度为N的数组A，包含0到N - 1的所有整数。找到最大的集合S并返回其大小，其中 S[i] = {A[i], A[A[i]], A[A[A[i]]], ... }且遵守以下的规则。
// 假设选择索引为i的元素A[i]为S的第一个元素，S的下一个元素应该是A[A[i]]，之后是A[A[A[i]]]... 以此类推，不断添加直到S出现重复的元素
var arrayNesting = function(nums) {
    if(nums.length == 0) return 0;
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0) continue;
        let cur = i;
        let cnt = 0;
        while(nums[cur] >= 0){
            cnt++;
            let tmp = nums[cur];
            nums[cur] = -1;
            cur = tmp;
        }
        res = Math.max(res,cnt);
    }
    return res;
};
