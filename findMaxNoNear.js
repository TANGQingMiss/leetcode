/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let res0 = 0;
    let res1 = 0;
    for(let i = 0; i < nums.length; i++){
        if(i%2 == 0){
            res0 += nums[i];
            res0 = Math.max(res0,res1);
        }
        else{
            res1 += nums[i];
            res1 = Math.max(res0,res1);
        }
    }
    return Math.max(res0,res1);
};
