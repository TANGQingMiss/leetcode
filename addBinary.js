/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a == null || a.length == 0) return b;
    if(b == null || b.length == 0) return a;
    let res = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let plus = 0;
    while(i >= 0 || j >= 0){
        if(i >= 0) plus += a.charAt(i --) - '0';
        if(j >= 0) plus += b.charAt(j --) - '0';
        //in js, number and string + -> transform number to string and join
        //number and string - -> type:number
        res += plus % 2;
        plus >>>= 1;
    }
    let ans = res.split('').reverse().join('');
    if(plus > 0){
        return '1' + ans;
    }else return ans;
};
