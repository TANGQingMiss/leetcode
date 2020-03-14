/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k == 0 || k == 1) return 0;
    let l = 0;
    let product = 1;//record product result
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        product *= nums[i];
        while(product >= k){//if >= k, / the first number
            product /= nums[l++];
        }
        res += i - l + 1;
    }
    return res;
};
