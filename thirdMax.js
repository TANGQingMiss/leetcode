/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if(nums == null || nums.length == 0) return null;
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return nums[0]>=nums[1]?nums[0]:nums[1];
    let max1 = max2 = max3 = -Math.pow(2,31) - 1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == max1 || nums[i] == max2 || nums[i] == max3){
            continue;
        }
        if(nums[i] > max1){
            let tmp = max1;
            let tmp2 = max2;
            max1 = nums[i];
            max2 = tmp;
            max3 = tmp2; 
        }else if(nums[i] > max2){
            let tmp = max2;
            max2 = nums[i];
            max3 = tmp;
        }else if(nums[i] > max3){
            max3 = nums[i];
        }
    }
    if(max3==-Math.pow(2,31)-1 || max2==-Math.pow(2,31)-1){
        return max1;
    }
    if(max1==max2 || max1==max3 || max2==max3){
        return max1;
    }
    return max3;
};
