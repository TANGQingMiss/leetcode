/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums = nums.sort(function(x,y){return x - y;});
    let begin = 0;
    let res = 0;
    for(let end = 0; end < nums.length; end++){
        while(nums[end]-nums[begin] > 1){
            begin++;
        }
        if(nums[end]-nums[begin] == 1){
            res = Math.max(res,end-begin+1);
        }
    }
    return res;
};
