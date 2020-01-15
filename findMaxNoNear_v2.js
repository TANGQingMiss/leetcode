/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length == 0 || nums == null) return 0;
    if(nums.length == 1) return nums[0];
    if(nums.length == 2) return Math.max(nums[0],nums[1]);
    return Math.max(subArray(nums,0,nums.length-1),subArray(nums,1,nums.length))
    function subArray(nums,m,n){
        let res0 = 0;
        let res1 = 0;
        for(let i = m; i < n; i++){
            if(i%2 == 0){
                res0 += nums[i];
                res0 = Math.max(res0,res1);
            }
            else{
                res1 += nums[i];
                res1 = Math.max(res0,res1);
            }
        }
        return Math.max(res0,res1);
    }
};
