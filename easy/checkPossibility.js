/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    if(!nums || nums.length <= 2) return true;
    let change = 0;
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i+1]){
            if(i == 0){
                nums[i] = nums[i+1];
                change++;
            }else if(nums[i+1] > nums[i-1]){
                nums[i] = nums[i-1];
                change++;
            }else if(nums[i+1] <= nums[i-1]){
                nums[i+1] = nums[i];
                change++;
            }
        }
    }
    if(change >= 2){
        return false;
    }
    return true;
};
