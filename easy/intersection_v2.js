/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums1 == null || nums2 == null) return null;
    let res = [];
    function sortNumber(a,b){return a - b;}
    nums1.sort(sortNumber);
    nums2.sort(sortNumber);
    for(let i = 0, j = 0; i < nums1.length && j < nums2.length; ){
        if(nums1[i] < nums2[j]){
            i++;
        }
        else if(nums1[i] > nums2[j]){
            j++;
        }else{
            res.push(nums1[i]);
            i++;
            j++;
        }
    }
    
    return res;
};
