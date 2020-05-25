/**
 * @param {number[]} nums
 * @return {number}
 */
//给定一个非负整数数组，你最初位于数组的第一个位置。
//数组中的每个元素代表你在该位置可以跳跃的最大长度。
//你的目标是使用最少的跳跃次数到达数组的最后一个位置
var jump = function(nums) {
        let len = nums.length;
        if(len == 1) return 0;
        let reach = 0;
        let nextReach = nums[0];
        let step = 0;
        for(let i = 0; i < nums.length; i++){
            nextReach = Math.max(i+nums[i] == 0 ? 1 : i+nums[i],nextReach);
            if(nextReach >= nums.length - 1) return step+1;
            if(i == reach){
                step++;
                reach = nextReach;
            }
        }
        return step;
};
