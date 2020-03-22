/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
        let left = 0;
        let right = 1000001;
        while (left + 1 < right) {
            let mid = Math.floor((left + right) / 2);
            let sum = 0;
            for(let i = 0; i < nums.length; i++){
                sum += Math.ceil(nums[i] / mid)
            }
            if (sum > threshold) {
                left = mid;
            } else {
                right = mid;
            }
        }
        return right;
};
