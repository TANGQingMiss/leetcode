/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var res = 0;
    for(var i = 0; i < nums.length; i++){
        res ^= nums[i];
    }
    return res;
};
