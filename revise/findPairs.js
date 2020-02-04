/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k < 0) return 0;
    let map = new Map();
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],map.has(nums[i])?map.get(nums[i])+1:1);
    }
    if(k == 0){
        map.forEach((val,key) =>{
            if(val > 1) count++;
        });
    }else{
        map.forEach((val,key)=>{
            if(map.has(key + k)) count++;
        });
    }

    return count;
    
};
