/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let a = Number.MAX_VALUE;
    let b = Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= a) a = nums[i]; //smallest
        else if(nums[i] <= b) b = nums[i]; //second smallest
        else return true; //find value > a , b
    }
    return false;
};
