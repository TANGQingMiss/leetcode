/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort(function(x,y){return x - y;});
    let close = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < nums.length - 2; i++){
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            let threeSum = nums[l] + nums[r] + nums[i];
            if(Math.abs(threeSum-target) < Math.abs(close-target)){
                close = threeSum;
            }
            if(threeSum > target){
                r--;
            }else if(threeSum < target){
                l++;
            }else{
                return target;
            }
        }
    }
    return close;
};
