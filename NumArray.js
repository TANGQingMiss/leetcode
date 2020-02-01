/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.res = [];
    this.res[0] = nums[0];
    for(let i = 1; i < nums.length; i++){
        this.res[i] = this.res[i-1]+nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i == 0 ? this.res[j] : this.res[j] - this.res[i - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
