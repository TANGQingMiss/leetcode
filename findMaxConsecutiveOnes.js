/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return nums[0]==1?1:0;
    let res = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]==1){
            count += 1;
            res = Math.max(res,count);
        }else{
            count = 0;
        }
    }
    return res;
};
