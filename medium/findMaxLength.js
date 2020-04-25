/**
 * @param {number[]} nums
 * @return {number}
 */
//给定一个二进制数组, 找到含有相同数量的 0 和 1 的最长连续子数组
var findMaxLength = function(nums) {
    let res = 0;
    let sum = 0;//change 0 -> -1 make sum = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0) nums[i] = -1;
    }
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum == 0 && i > res){
            res = i + 1;
        }
        if(map.has(sum)){
            res = Math.max(i - map.get(sum),res);
        }else{
            map.set(sum,i);
        }
    }
    return res;
};
