/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    if(nums.length == 0) return false;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    if(sum % 4 != 0) return false;
    return dfs(nums,0,nums.length,0,0,0,0,sum / 4);

    function dfs(nums,i,len,i1,i2,i3,i4,j){
        if(i == len){
            if(i1 == j && i2 == j && i3 == j && i4 == j) return true;
            else return false;
        }
        if(i1 > j || i2 > j || i3 > j || i4 > j) return false;
        return dfs(nums,i+1,len,i1+nums[i],i2,i3,i4,j) ||
                dfs(nums,i+1,len,i1,i2+nums[i],i3,i4,j) ||
                dfs(nums,i+1,len,i1,i2,i3+nums[i],i4,j) ||
                dfs(nums,i+1,len,i1,i2,i3,i4+nums[i],j);
    }
};
