/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if(num == 0) return "0";
    let flag = num < 0 ? true : false;
    num = Math.abs(num);
    let res = "";
    while(num != 0){
        res = (num % 7) + res;
        num = Math.floor(num / 7);
    }
    return flag == true? "-" + res : res;
};
