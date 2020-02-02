/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let res = 0;
    let minValue = Math.min.apply(null,nums);
    for(let i = 0; i < nums.length; i++){
        res += (nums[i] - minValue);
    }
    return res;
};
