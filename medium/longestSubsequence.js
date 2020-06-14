/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
//给你一个整数数组 arr 和一个整数 difference，请你找出 arr 中所有相邻元素之间的差等于给定 difference 的等差子序列，并返回其中最长的等差子序列的长度
// 例如 arr = [1,2,3,4], difference = 1
// 从后向前遍历
// map.get(4) 就表示以4为结尾的最大长度
// 然后遍历到3 即 map.get(3) = map.get(3 + difference) + 1
var longestSubsequence = function(arr, difference) {
  let max = 0;
  let map = new Map();
  for (let i = arr.length - 1; i >= 0; --i) {
    let cur = ~~map.get(arr[i] + difference) + 1;
    map.set(arr[i], cur);
    max = Math.max(cur, max);
  } 
  return max;   
};
