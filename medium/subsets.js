/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];
    for(let i=0;i<nums.length;i++){
        res.forEach(tmp=>{
            res.push(tmp.concat(nums[i]))
        })
    }
    return res;
};
