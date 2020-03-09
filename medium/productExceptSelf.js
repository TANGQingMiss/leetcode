/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length;
    let left = 1,right = 1;
    let res = new Array(n);
    res.fill(1);
    for(let i = 0; i < n; ++i){
        res[i] *= left;
        left *= nums[i];
        res[n-1-i] *= right;
        right *= nums[n-1-i];
    }
    return res;
    //give an array [a,b,c,d,e]
    //return an array = [b*c*d*e,a*c*d*e,a*b*d*e,...]
};
