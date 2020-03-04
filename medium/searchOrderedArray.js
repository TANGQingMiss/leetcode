/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while(i <= j){
        while(i < j && nums[i] == nums[i+1]) ++i;
        while(i < j && nums[j] == nums[j-1]) --j;
        let mid = Math.floor((i + j) / 2);
        if(nums[mid] == target) return true;
        //left part
        if(nums[mid]>=nums[i]){
            if(target<nums[mid]&&target>=nums[i]) j = mid-1;
            else i = mid+1;
        }
        //right part
        else{
            if(target>nums[mid]&&target<=nums[j]) i = mid+1;
            else j = mid-1;
        }
    }
    return false;
};
