/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort(function(x,y){return x-y;});
    let res = [];
    for(let i = 0; i < nums.length - 2; i++){
        if(i == 0 || (i > 0 && nums[i] != nums[i - 1])){
            let l = i + 1;
            let r = nums.length - 1;
            let sum = 0 - nums[i];
            while(l < r){
                if(nums[l] + nums[r] == sum){
                    res.push([nums[i],nums[l],nums[r]]);
                    while(l < r && nums[l] == nums[l+1]) l++;
                    while(l < r && nums[r] == nums[r-1]) r--;
                    l++;
                    r--;
                }else if(nums[l] + nums[r] < sum){
                    while(l < r && nums[l] == nums[l + 1]) l++;
                    l++;
                }else{
                    while(l < r && nums[r] == nums[r-1]) r--;
                    r--;
                }
            }
        }
    }
    return res;
};
