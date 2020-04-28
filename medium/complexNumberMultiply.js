/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
//给定两个表示复数的字符串
var complexNumberMultiply = function(a, b) {
    a = a.split("+");
    b = b.split("+");
    let r1 = parseInt(a[0]);
    let r2 = parseInt(b[0]);
    let tmp1 = a[1].split("i");
    let tmp2 = b[1].split("i");
    let i1 = parseInt(tmp1[0]);
    let i2 = parseInt(tmp2[0]);
    let r = r1 * r2 - i1 * i2;
    let i = r1 * i2 + r2 * i1;
    let str = "" + r + "+" + i + "i";
    return str;
};
