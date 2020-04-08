/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
// 说明：解集不能包含重复的子集。
var subsetsWithDup = function(nums) {
    nums.sort(function(x,y){return x - y;});
    let res = [];
    let list = [];
    backtrack(nums,res,list,nums.length,0);
    return res;

    function backtrack(nums,res,list,len,idx){
        let tmp = list.slice(0);
        res.push(tmp);
        for(let i = idx; i < len; i++){
            if(i - 1 >= idx && nums[i-1] == nums[i]) continue;
            list.push(nums[i]);
            backtrack(nums,res,list,len,i+1);
            list.pop();
        }
    }
};
