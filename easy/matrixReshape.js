/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let originRow = nums.length;
    let originCol = nums[0].length;
    if(originRow * originCol != r * c) return nums;
    let res = new Array(r);
    for(let i = 0; i < r; i++){
        res[i] = new Array(c);
    }
    for(let j = 0; j < originRow * originCol; j++){
        res[Math.floor(j / c)][j % c] = nums[Math.floor(j / originCol)][j % originCol];
    }
    return res;

};
