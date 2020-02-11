/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];
    for(let i = left; i <= right; i++){
        if(i < 10){
            res.push(i);
        }else{
            if(isDivider(i)){
                res.push(i);
            }
        }
    }
    return res;

    function isDivider(num){
        let n = num;
        while(num != 0){
            if(num % 10 == 0 || n % (num % 10) != 0){
                return false;
            }
            num = Math.floor(num / 10);
        }
        return true;
    }
};
