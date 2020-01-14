/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if( nums != null && nums.length != 0){
        let n = nums.length;
        k %= n;
        for(let i = 0; i < k; i++){
            let tmp = nums[n-1];
            for(let j = n - 1; j > 0; j--){
                nums[j] = nums[j-1];
            }
            nums[0] = tmp;
        }
    }
};
