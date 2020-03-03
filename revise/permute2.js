/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let results = [];
    let tmp = [];
    let used = new Array(nums.length);
    for(let i = 0; i < nums.length; i++){
        used[i] = 0;
    }
    nums = nums.sort(function(x,y){return x - y;});

    function dfs(n,tmp,used){
        if(n == nums.length){
            results.push(tmp);
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(used[i]) continue;
            if(i > 0 && nums[i] == nums[i-1] && used[i-1] == 0) continue;
            tmp.push(nums[i]);
            used[i] = 1;
            dfs(tmp.length,tmp.slice(),used);
            tmp.pop();
            used[i] = 0;
        }
    }

    dfs(0,tmp,used);
    return results;
};
