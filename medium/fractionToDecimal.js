//给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以字符串形式返回小数。
//如果小数部分为循环小数，则将循环的部分括在括号内
var fractionToDecimal = function(numerator, denominator) {
    if(numerator === '0') return '0';
    let ans = '';
    let map = new Map();
    let a = Math.abs(numerator);
    let b = Math.abs(denominator);
    let c = Math.floor(a / b);// 数字比较大的时候位运算会出问题 -2147483648 和 1
    let d = a % b;
    if((numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0) )  {
        ans = ans.concat('-')
    }
    ans = ans.concat(c);
    if(d === 0) return ans;
    ans = ans.concat('.');
    while(d !== 0) {
        if(map.has(d)) {
            ans = insert('(',map.get(d),ans);
            ans = ans.concat(')');
            return ans;
        }
        map.set(d,ans.length);
        d *= 10;
        ans = ans.concat(d/b | 0);
        d = d % b;
    }
    return ans;
}
const insert = function(str,pos,ans) {
    return ans.substring(0,pos) + str + ans.substring(pos);
}
