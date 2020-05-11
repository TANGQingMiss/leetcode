/**
 * @param {number} num
 * @return {number[]}
 */
//给你一个整数 num，请你找出同时满足下面全部要求的两个整数：
//两数乘积等于  num + 1 或 num + 2
//以绝对差进行度量，两数大小最接近
var closestDivisors = function(num) {
    let res = new Array(2);
    let sqrt = Math.floor(Math.sqrt(num + 2));
    for(let  i = sqrt; i >= 1; i--){
        if((num + 1) % i == 0){
            res[0] = i;
            res[1] = (num + 1) / i;
            return res;
        }
        if((num + 2) % i == 0){
            res[0] = i;
            res[1] = (num + 2) / i;
            return res;
        }
    }
    return res;
};
