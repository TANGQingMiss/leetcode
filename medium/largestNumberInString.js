/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i] + "";
    }

    let sorted;
    for(let i = 0; i < nums.length;i++){
        sorted = true;
		for(let j = 0; j < nums.length - i - 1; j++){
			if(nums[j]+nums[j+1] < nums[j+1]+nums[j]){
				let tmp = nums[j];
				nums[j] = nums[j+1];
				nums[j+1] = tmp;
				sorted = false;
			}
		}
		if(sorted) break;
    }
    if(nums[0] == '0') return '0';
    return nums.join('');
};
