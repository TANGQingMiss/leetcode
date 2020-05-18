/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
//给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length - k;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(x - arr[mid] > arr[mid+k] - x){
            left = mid + 1;
        }else{
            right = mid;
        }
    }
    return arr.slice(left,left+k);
};
