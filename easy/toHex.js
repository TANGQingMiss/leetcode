/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num == 0) return '0';
    let chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let res = [];
    while(res.length < 8 && num != 0){
        res.push(chars[num & 0xf]);
        num >>= 4;
    }
    return res.reverse().join('');
};
