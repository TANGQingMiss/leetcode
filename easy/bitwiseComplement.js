/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    let num = N.toString(2);
    num = num.replace(/1/g,'2');
    num = num.replace(/0/g,'1');
    num = num.replace(/2/g,'0');
    // let res = 0;
    // for(let i = 0; i < num.length; i++){
    //     res += parseInt(num.charAt(i)) * Math.pow(2,num.length - i - 1);
    // }
    // return res;
    return parseInt(num,2);
};
