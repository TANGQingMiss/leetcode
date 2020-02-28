/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits == "") return [];
    let letter = new Map();
    letter.set('2',['a','b','c']);
    letter.set('3',['d','e','f']);
    letter.set('4',['g','h','i']);
    letter.set('5',['j','k','l']);
    letter.set('6',['m','n','o']);
    letter.set('7',['p','q','r','s']);
    letter.set('8',['t','u','v']);
    letter.set('9',['w','x','y','z']);

    digits = digits.split('');
    let res = letter.get(digits[0]);
    for(let i = 1; i < digits.length; i++){
        let tmp = res.slice(0);
        let res2 = [];
        let next = letter.get(digits[i]);
        for(let j = 0; j < tmp.length; j++){
            for(let k = 0; k < next.length; k++){
                res2.push(tmp[j]+next[k]);
            }
        }
        res = res2.slice(0);
    }
    return res;
};
