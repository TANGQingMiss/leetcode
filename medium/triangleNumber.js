/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort(function(x,y){return x - y;});
    let res = 0;
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            let k = j + 1;
            while(k < nums.length){
                if(nums[i]+nums[j] > nums[k]){
                    res++;
                    k++;
                }else break;
            }
        }
    }
    return res;
};
