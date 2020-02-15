/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    //divide all numebers into several groups/
    //each group has the same number
    //each group.length is equal
    if(deck == null || deck.length <= 1) return false;
    let map = new Map();
    for(let i = 0; i < deck.length; i++){
        map.set(deck[i],map.has(deck[i])?map.get(deck[i])+1:1);
    }

    //find greatest common divisor
    function commonDivisor(num1,num2) {
        if((num1-num2) < 0) {
            let k = num1;
            num1 = num2;
            num2 = k;
        } 
        while (num2 !=0) {
            let remainder = num1%num2;
            num1 = num2;
            num2 = remainder;
        }
        return num1;
    }

    let nums = [];
    for(let [key,value] of map){
        nums.push(value);
    }

    if(nums.length == 1 && nums[0] >= 2) return true;
    if(nums.length == 1 && nums[0] < 2) return false;

    let common = commonDivisor(nums[0],nums[1]);
    for(let i = 2; i < nums.length; i++){
        common = commonDivisor(common,nums[i]);
    }  
    return common != 1;
};
