/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let res = [];
    if(!numbers || target < numbers[0]) return res;
    // for(let i = 0; i < numbers.length; i++){
    //     if(numbers.indexOf(target - numbers[i]) != -1 && 
    //     numbers.indexOf(target - numbers[i]) != i){
    //         res.push(i+1,numbers.indexOf(target - numbers[i])+1);
    //         break;
    //     }
    // }
    // res.sort(function(x,y){return x - y;});

    let l = 0;
    let r = numbers.length;
    while(l < r){
        if(numbers[l]+numbers[r] == target){
            res.push(l+1,r+1);
            return res;
        }else if(numbers[l]+numbers[r] < target){
            l++;
        }else{
            r--;
        }
    }
    return res;
    
};
