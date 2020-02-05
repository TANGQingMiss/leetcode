/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {

    if(!nums) return [];
    
    //stock position of each player
    let position = new Map();
    for(let i = 0; i < nums.length; i++){
        position.set(nums[i],i);
    }

    //sort nums
    nums = nums.sort(function(x,y){return y - x;});

    let res = new Array(nums.length);
    for(let j = 0; j < nums.length; j++){
        if(j == 0){
            res[position.get(nums[j])] = "Gold Medal";
        }else if(j == 1){
            res[position.get(nums[j])] = "Silver Medal";
        }else if(j == 2){
            res[position.get(nums[j])] = "Bronze Medal";
        }else{
            res[position.get(nums[j])] = "" + (j + 1) ;
        }
    }
    return res;
};
