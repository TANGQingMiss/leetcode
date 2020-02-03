/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [];
    let duplicate;
    let miss;
    for(let i = 1; i <= nums.length; i++){
         if(nums.indexOf(i) == -1){
             miss = i;
         }
        if(nums.indexOf(i) != -1 && nums.indexOf(i) != nums.lastIndexOf(i)){
            duplicate = i;
        }
        if(miss&&duplicate) break;
    }
    res.push(duplicate,miss);
    return res;
};
