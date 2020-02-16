/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let vowel = 'aeiouAEIOU';
    let res = [];
    let words = S.split(' ');
    for(let i = 0; i < words.length; i++){
        let tmp = words[i].split('');
        if(vowel.indexOf(tmp[0]) != -1){
            tmp.push('m','a');
        }else{
            let first = tmp[0];
            tmp.shift();
            tmp.push(first,'m','a');
        }
        for(let j = 1; j <= i+1; j++){
            tmp.push('a');
        }
        res.push(tmp.join(''));
    }
    return res.join(' ');
};
