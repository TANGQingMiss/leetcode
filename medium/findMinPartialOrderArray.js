/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length == 1) return nums[0];
    let res = Number.MAX_VALUE;
    let i = 0;
    let j = nums.length - 1;
    while(i < j){
        let mid = Math.floor((i + j) / 2);
        if(nums[mid] < nums[j]){
            j = mid;
            res = Math.min(res,nums[mid])
        }else{
            i = mid + 1;
        }
        if(i == j) return nums[i];
    }
    return res;
};
