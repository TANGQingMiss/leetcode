/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序
var wiggleSort = function(nums) {
  let nums2 = nums.sort((a, b) => b - a).splice(nums.length % 2 == 0 ? nums.length / 2 : (nums.length -1) / 2),
      pushIndex = 0,
      forNUmber = nums2.length;
  
  for(let i = 0; i < forNUmber; i++) {
    nums.splice(pushIndex, 0, nums2[i]);
    pushIndex += 2;
  }
  return nums
};
