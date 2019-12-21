/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target==null) return -1;
    if(nums=='') return 0;
    if(nums.indexOf(target)>=0) return nums.indexOf(target);
    else{
        var len = nums.length;
        for(let i = 0; i < len; i++){
            if(nums[i]>=target) return i;
        }
        return len;
    }
};
