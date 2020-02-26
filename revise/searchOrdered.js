/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function binarySearch(nums,low,high,target){
        if(low > high) return -1;
        let mid = Math.floor((low + high) / 2);
        if(nums[mid] == target) return mid;
        if(nums[mid] < nums[high]){
            if(nums[mid] < target && target <= nums[high]){
                return binarySearch(nums,mid+1,high,target);
            }else{
                return binarySearch(nums,low,mid-1,target);
            }
        }else{
            if(nums[low] <= target && target < nums[mid]){
                return binarySearch(nums,low,mid - 1, target);
            }else{
                return binarySearch(nums,mid+1,high,target);
            }
        }
    }
    return binarySearch(nums,0,nums.length-1,target);
};
