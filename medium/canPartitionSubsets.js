/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    if(k == 1) return true;
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    if(sum % k != 0) return false;
    let target = sum / k;
    nums.sort(function(x,y){return x - y;});
    if(nums[nums.length - 1] > target) return false;

    let arr = new Array(k).fill(target);
    return helper(nums,nums.length-1,arr,k);

    function helper(nums,cur,arr,k){
        if(cur < 0) return true;
        for(let i = 0; i < k; i++){
            if(arr[i] == nums[cur] || (cur > 0 && arr[i] - nums[cur] >= nums[0])){
                arr[i] -= nums[cur];
                if(helper(nums,cur-1,arr,k)) return true;
                arr[i] += nums[cur];
            }
        }
        return false;
    }
    
};
