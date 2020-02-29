/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length == 0) return 0;
    let sign = 1;
    let res = 0;
    let i = 0;
    while(i < str.length && str[i] == ' ') ++i;
    if(i == str.length) return 0;
    if(str[i] == "-"){
        sign = -1;
        ++i;
    }else if(str[i] == "+"){
        sign = 1;
        ++i;
    }
    while(i < str.length && str[i] >= '0' && str[i] <= '9'){
        res = res * 10 + parseInt(str[i++]);
    }
    if(sign == 1 && res > Math.pow(2,31)-1) return Math.pow(2,31)-1;
    else if(sign == -1 && res > Math.pow(2,31)) return -Math.pow(2,31);
    else return res * sign;
};
