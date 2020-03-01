/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let index = -1;
    let i = 0;
    let j = nums.length;
    while(i < j){
        if(nums[i] == 0){
            let tmp = nums[++index];
            nums[index] = nums[i];
            nums[i] = tmp;
            i++;
        }else if(nums[i] == 2){
            let tmp = nums[--j];
            nums[j] = nums[i];
            nums[i] = tmp;
        }else{
            i++;
        }
    }

    return;
};
