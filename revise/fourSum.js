/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
//给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组
var fourSum = function(nums, target) {
    nums.sort(function(x,y){return x - y;});
    let res = [];
    for(let i = 0; i < nums.length - 3; i++){
        for(let r = nums.length - 1; r > i + 2; r--){
            if(r != nums.length - 1 && nums[r] == nums[r+1]){
                continue;
            }else if(i != 0 && nums[i] == nums[i-1]){
                continue;
            }
            let left = i + 1,right = r - 1;
            let sum = target - nums[i] - nums[r];
            while(left < right){
                if(sum == nums[left] + nums[right]){
                    let tmp = [];
                    res.push([nums[i],nums[left],nums[right],nums[r]]);
                    while(left < nums.length - 1 && nums[left] == nums[left+1]) left++;
                    while(right > 0 && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                }else if(sum < nums[left] + nums[right]){
                    right--;
                }else left++;
            }
        }
    }
    return res;
};
