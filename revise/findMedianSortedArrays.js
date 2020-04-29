/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
//请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let left = Math.floor((m + n + 1) / 2);
    let right = Math.floor((m + n + 2) / 2);
    return (findKth(nums1,0,nums2,0,left) + findKth(nums1,0,nums2,0,right)) / 2;

    function findKth(nums1,i,nums2,j,k){
        if(i >= m) return nums2[j + k - 1];//nums1 = null
        if(j >= n) return nums1[i + k - 1];//nums2 = null
        if(k == 1){
            return Math.min(nums1[i],nums2[j]);
        }
        let mid1 = (i + Math.floor(k / 2) - 1 < m) ? nums1[i + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
        let mid2 = (j + Math.floor(k / 2) - 1 < n) ? nums2[j + Math.floor(k / 2) - 1] : Number.MAX_VALUE;
        if(mid1 < mid2){
            return findKth(nums1, i + Math.floor(k / 2), nums2, j , k - Math.floor(k / 2));
        }else{
            return findKth(nums1, i , nums2, j + Math.floor(k / 2), k - Math.floor(k / 2));
        }
    }
};
