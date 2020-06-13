/**
 * @param {number[]} nums
 */
// 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
//update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改
var NumArray = function(nums) {
    this.res = [];
    this.sum = 0;
    this.nums = nums;
    for(let i = 0; i < nums.length; i++){
        this.sum += this.nums[i];
        this.res[i] = this.sum;
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    for(let idx = i; idx < this.res.length; idx++){
        this.res[idx] -= this.nums[i];
        this.res[idx] += val;
    }
    this.nums[i] = val;
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i == 0) return this.res[j];
    return this.res[j] - this.res[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
