/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;

    //first,establish a map to find the mode
    let map = new Map();
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i],map.has(nums[i])?map.get(nums[i])+1:1);
    }
    let mode = [];
    //find the mode
    let tmp = 0;
    for(let [key,value] of map){
        if(value > tmp) tmp = value;
    }
    for(let [key,value] of map){
        if(map.get(key) == tmp) mode.push(key);
    }
    //second, use indexOf and lastIndexOf to find the shortest subarray
    let res = Number.MAX_VALUE;
    for(let i = 0; i < mode.length; i++){
        if(nums.lastIndexOf(mode[i]) - nums.indexOf(mode[i]) + 1 < res){
            res = nums.lastIndexOf(mode[i]) - nums.indexOf(mode[i]) + 1;
        }
    }
    return res;
};
