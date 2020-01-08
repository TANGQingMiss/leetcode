/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length==1) return nums;
    var res = 0;
    for(let i = 0; i < nums.length; i++){
        let tmp = 1;
        for(let j = i; j < nums.length; j++){
            tmp *= nums[j];
            if(tmp > res) res = tmp;
        }
    }
    return res;
};
