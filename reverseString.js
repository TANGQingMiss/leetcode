/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    if(s == null || s.length <= 1) return;
    let len = s.length;
    for(let i = 0; i < Math.floor(len / 2); i++){
        let tmp = s[i];
        s[i] = s[len - i - 1];
        s[len - i - 1] = tmp;
    }
};
