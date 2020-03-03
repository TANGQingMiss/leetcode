/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];
    let tmp = [];

    function dfs(n,tmp){
        if(n == nums.length){
            results.push(tmp);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(tmp.indexOf(nums[i]) == -1){
                tmp.push(nums[i]);
                dfs(tmp.length,tmp.slice());
                tmp.pop();
            }
        }
    }

    dfs(0,tmp);
    return results;
};
