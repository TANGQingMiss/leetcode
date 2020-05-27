/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//给你一个数组 nums，有一个大小为 k 的窗口从最左端滑动到最右端。窗口中有 k 个数，每次窗口向右移动 1 位。你的任务是找出每次窗口移动后得到的新窗口中元素的中位数，并输出由它们组成的数组。
var medianSlidingWindow = function (nums, k) {
    if(nums == null || nums.length == 0) return [];
    if(k == 1) return nums;
    let isOdd = k % 2;
    let arr = [];
    let res = [];
    //滑动窗口+插入排序splice
    let add = function (num) {
        let left = 0;
        let right = arr.length;
        while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1
        } else {
            right = mid;
        }
        }
        arr.splice(left, 0, num);
    }
    let remove = function (num) {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < num) {
            left = mid + 1
        } else {
            right = mid;
        }
        }
        arr.splice(left, 1);
    }
    for (let i = 0; i < k - 1; ++i) {
        add(nums[i])
    }
    for (let i = k - 1, len = nums.length; i < len; ++i) {
        add(nums[i])
        if (isOdd) {
        res.push(arr[(k - 1) / 2])
        } else {
        res.push((arr[k / 2] + arr[k / 2 - 1]) / 2)
        }
        remove(nums[i - k + 1])
    }
    return res;
};
