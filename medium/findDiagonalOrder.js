/**
 * @param {number[][]} nums
 * @return {number[]}
 */
//给你一个列表 nums ，里面每一个元素都是一个整数列表。请你依照下面各图的规则，按顺序返回 nums 中对角线上的整数
var findDiagonalOrder = function (nums) {
  if (nums.length === 0) return [];
  let arrays = [], result = [];
  for (let i = 0; i < nums.length; i++) {
    let rows = nums[i];
    for (let j = 0; j < rows.length; j++) {
      if (!arrays[i + j]) arrays[i + j] = [];
      arrays[i + j].push(nums[i][j]);
    }
  } 
  // 二维数组扁平化
  for (const rows of arrays) {
    result.push(...rows.reverse());
  }
  return result;
};
