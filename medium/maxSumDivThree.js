/**
 * @param {number[]} nums
 * @return {number}
 */
//给你一个整数数组 nums，请你找出并返回能被三整除的元素最大和
var maxSumDivThree = function(nums) {
    let dp = [0,0,0];
        let n=nums.length;
        for(let i=0;i<n;i++){
            if(nums[i]%3==0){
                dp[1]+=nums[i];
                dp[0]+=nums[i];
                dp[2]+=nums[i];
            }
            if(nums[i]%3==1){
                let t=dp[0];
                if((nums[i]+dp[2])%3==0) dp[0]=Math.max(dp[0],nums[i]+dp[2]);
                if((nums[i]+dp[1])%3==2)dp[2]=Math.max(dp[2],dp[1]+nums[i]);
                if((nums[i]+t)%3==1)dp[1]=Math.max(dp[1],t+nums[i]);
            }
            if(nums[i]%3==2){
                let t=dp[0];
                if((nums[i]+dp[1])%3==0)dp[0]=Math.max(dp[0],dp[1]+nums[i]);
                if((nums[i]+dp[2])%3==1)dp[1]=Math.max(dp[1],dp[2]+nums[i]);
                if((nums[i]+t)%3==2)dp[2]=Math.max(dp[2],t+nums[i]);
            }
        }
        return dp[0];                                                                                           
};
