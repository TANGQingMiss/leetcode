/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let num1 = 0;
    let num2 = 0;
    let xor = 0;
    for(let i = 0; i < nums.length; i++){
        xor ^= nums[i];
    }//xor -> real num1 ^= real num2
    let bit = 1;
    while((xor & 1) == 0){
        xor >>= 1;
        bit <<= 1;
    }
    for(let i = 0; i < nums.length; i++){
        if((nums[i] & bit) == 0){
            num1 ^= nums[i];
        }else num2 ^= nums[i];
    }
    return [num1,num2];
};
