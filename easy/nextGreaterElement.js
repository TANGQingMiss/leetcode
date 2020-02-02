/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let res = [];
    for(let i = 0; i < nums1.length; i++){
        let value = nums1[i];
        let index = nums2.indexOf(value);
        if(index == nums2.length - 1) res.push(-1);
        let flag = 0;
        for(let j = index + 1; j < nums2.length; j++){
            if(nums2[j] > value){
                res.push(nums2[j]);
                flag = 0;
                break;
            }
            else{
                flag = 1;
            }
        }
        if(flag) res.push(-1);
    }
    return res;
};
