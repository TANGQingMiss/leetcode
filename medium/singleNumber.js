/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort(function(x,y){return x - y;});
    for(let i = 0; i < nums.length; i += 3){
        if(nums[i] != nums[i+2]) return nums[i];
    }
    return nums[nums.length - 1];
};
