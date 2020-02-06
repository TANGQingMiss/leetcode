/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    if(!nums || nums.length <= 1) return false;
    let max = Math.max.apply(null,nums);
    let index = nums.indexOf(max);
    for(let i = 0; i < nums.length; i++){
        if(i != index){
            if(max < nums[i] * 2){
                return -1;
                break;
            }
        }
    }
    return index;
};
