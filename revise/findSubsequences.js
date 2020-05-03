/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2
var findSubsequences = function(nums) {
    let res = [];
    let tmp = [];
    dfs(nums,0,tmp,res);
    return res;
    
    function dfs(nums,i,tmp,res){
        if(tmp.length >= 2){
            res.push(tmp.slice(0));
        }
        let s = new Set();
        for(let j = i; j < nums.length; j++){
            if(tmp.length > 0 && tmp[tmp.length-1] > nums[j]) continue;
            if(s.has(nums[j])) continue;
            s.add(nums[j]);
            tmp.push(nums[j]);
            dfs(nums,j+1,tmp,res);
            tmp.pop();
        }
    }
};
