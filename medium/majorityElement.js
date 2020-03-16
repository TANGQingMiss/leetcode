/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if(nums.length < 1) return [];
    let res = [];
    //>3/n at most two numbers
    let x = 0, y = 0, cx = 0, cy = 0, count = 0;
    for(let i = 0; i < nums.length; i++){
        if((cx == 0 || nums[i] == x) && nums[i] != y){
            cx++;
            x = nums[i];
        }else if(cy == 0 || nums[i] == y){
            cy++;
            y = nums[i];
        }else{
            cx--;
            cy--;
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(x == nums[i]) count++;
    }

    if(count > Math.floor(nums.length / 3)){
        res.push(x);
    }
    count = 0;
    for(let i = 0; i < nums.length; i++){
        if(y == nums[i]) count++;
    }

    if(count > Math.floor(nums.length / 3)){
        if(res.indexOf(y) == -1){
            res.push(y);
        }
    }
    return res;
};
