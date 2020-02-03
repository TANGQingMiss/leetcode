/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if(s == null || s.length == 0) return s;
    let array = s.trim().split(' ');
    for(let i = 0; i < array.length; i++){
        array[i] = array[i].split('').reverse().join('');
    }
    return array.join(' ');
};
