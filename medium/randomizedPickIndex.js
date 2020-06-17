/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let index = []
    for(var i =0;i<this.nums.length;i++){
    if(this.nums[i]===target)
    index.push(i)
    }
    var result = index[Math.floor(Math.random()*index.length)]
    return result
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
