/**
 * @param {number[]} nums
 * @return {number}
 */
//假设按照升序排序的数组在预先未知的某个点上进行了旋转,请找出其中最小的元素
//注意数组中可能存在重复的元素
var findMin = function(nums) {
    let i = 0;
    let j = nums.length - 1;
    while(i < j){
        let mid = Math.floor((i + j) / 2);
        if(nums[mid] > nums[j]){
            i = mid + 1;
        }else if(nums[mid] < nums[j]){
            j = mid;
        }else j--;
    }
    return nums[i];
};
