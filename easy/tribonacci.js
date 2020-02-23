/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n == 0) return 0;
    if(n == 1) return 1;
    if(n == 2) return 1;
    let nums = new Array(n+1);
    nums[0] = 0;
    nums[1] = 1;
    nums[2] = 1;
    for(let i = 3; i <= n; i++){
        nums[i] = nums[i-1]+nums[i-2]+nums[i-3];
    }
    return nums[n];
};
