/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <= 1) return true;
    //if no zero, on must be able to jump to the last one
    if(nums.indexOf(0) == -1) return true;
    //else, check elements before 0 that can overpass 0
    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] == 0){
            let flag = 0;
            for(let j = i - 1; j >= 0; j--){
                if(nums[j] > i - j) flag = 1;
            }
            if(flag == 0) return false;
        }
    }
    return true;
};
