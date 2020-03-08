/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res = [];
    for(let i = 0; i < nums.length; ){
        let j = i;
        while(i < nums.length - 1 && nums[i] + 1 == nums[i+1]){
            i++;
        }
        if(j == i){
            res.push(nums[j] + "");
        }
        else{
            res.push(nums[j] + "->" + nums[i]);
        }
        i++;
    }
    return res;
};
