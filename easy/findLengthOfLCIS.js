/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    let res = 1;
    let tmp = 1;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] < nums[i+1]){
            tmp++;
            res = Math.max(res,tmp);
        }else{
            res = Math.max(res,tmp);
            tmp = 1;
        }
    }
    return res;
};
