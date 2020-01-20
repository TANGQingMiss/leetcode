/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(nums1 == null || nums2 == null) return null;
    let res = [];
    for(let i = 0; i < nums1.length; i++){
        if(nums2.indexOf(nums1[i])!=-1&&res.indexOf(nums1[i])==-1){
            res.push(nums1[i]);
        }
    }
    return res;
};
