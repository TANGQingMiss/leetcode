/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length <= 1) return;
    let j = nums.length - 1;
    //find the first element that makes left < right
    while(j - 1 >= 0 && nums[j - 1] >= nums[j]){
        j--;
    }
    //j == 0 means all numbers are ordered decreasingly
    if(j == 0){
        nums.reverse();
        return;
    }
    //if j > 0, find the nearest number to j from nums[j]-nums[nums.length-1]
    let right = nums.length - 1
    while(right >= j){
        if(nums[right] > nums[j-1]) break;
        right--;
    }

    let tmp = nums[right];
    nums[right] = nums[j-1];
    nums[j-1] = tmp;

   let cnt = Math.floor((nums.length - j) / 2);
   let i = 0;
   while(cnt > 0){
        let tmp = nums[j+i];
        nums[j+i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = tmp;
        ++i;
        --cnt;
   }
    return;
};
