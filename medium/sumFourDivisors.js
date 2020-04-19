/**
 * @param {number[]} nums
 * @return {number}
 */
//给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。
var sumFourDivisors = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++){
        let res = 0;
        let cnt = 0;
        for(let j = 1; j <= Math.floor(Math.sqrt(nums[i])); j++){
            if(nums[i] % j == 0){
                let other = nums[i] / j;
                if(other != j){
                    cnt += 2;
                    res += other + j;
                }else{
                    cnt += 1;
                    res += j;
                }
            }
        }
        if(cnt == 4) ans += res;
    }
    return ans;
};
