/**
 * @param {number[]} nums
 * @return {number}
 */
//两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量
var totalHammingDistance = function(nums) {
    let res = 0;
    let len = nums.length;
    for(let i = 0; i < 30; i++){
        let one = 0;
        let tmp = 0;
        for(let j = 0; j < len; j++){
            one += nums[j] & 1;
            nums[j] >>= 1;
            tmp += nums[j] == 0 ? 1 : 0;
        }
        res += one * (len - one);
        if(tmp == len) break; 
    }
    return res;
};
