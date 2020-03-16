/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    //find median
    nums.sort(function(x,y){return x - y;});
    let i = 0;
    let j = nums.length - 1;
    let res = 0;
    while(i < j){
        res += nums[j--] - nums[i++];
    }
    return res;
};
