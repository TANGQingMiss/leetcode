/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums == null || nums.length == 0) return null;
    if(nums.length == 1) return nums[0];
    nums.sort(function(a,b){return b-a;});
    let res = nums[Math.floor(nums.length / 2)];
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == res) count++;
    }
    if(count >= Math.floor(nums.length / 2)) return res;
    else return null;
};
