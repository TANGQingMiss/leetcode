/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums == null || nums.length <= 2) return -1;

    //calculate sum
    let sumArray = 0;
    for(let i = 0; i < nums.length; i++){
        sumArray += nums[i];
    }
    let countLeft = 0;
    for(let j = 0; j < nums.length; j++){
        if((sumArray - nums[j]) / 2 == countLeft){
            return j;
        }
        countLeft += nums[j];
    }
    return -1;
};
