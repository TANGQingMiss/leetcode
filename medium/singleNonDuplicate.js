/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    //O(n)
    //let res = 0;
    //for(let i = 0; i < nums.length; i++){
        //res ^= nums[i];
    //}
    //return res;

    //O(logn)
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] == nums[mid-1]){
            if((mid-left)%2 == 0){
                right = mid - 2;
            }else{
                left = mid + 1;
            }
        }else if(nums[mid] == nums[mid+1]){
            if((right-mid)%2 == 0){
                left = mid + 2;
            }else{
                right = mid - 1;
            }
        }else return nums[mid];
    }
    return nums[right];
};
