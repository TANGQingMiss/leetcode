/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
    if(shifts.length == 0) return S;
    S = S.split('');
    let move = 0;
    for(let i = shifts.length - 1; i >= 0; i--){
        move += shifts[i] % 26;
        move %= 26;
        S[i] = String.fromCharCode((S[i].charCodeAt(0) + move - 97) % 26 + 97);
    }
    return S.join('');
};
