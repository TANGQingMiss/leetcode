/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let res = 0;
    let bucket = new Array(26);
    for(let i = 0; i < 26; i++){
        bucket[i] = 0;
    }
    for(let i = 0; i < chars.length; i++){
        bucket[chars.charCodeAt(i) - 97]++;
    }
    for(let i = 0; i < words.length; i++){
        //deep copy of array by slice(0)
        let tmp = bucket.slice(0);
        let flag = true;
        for(let j = 0; j < words[i].length; j++){
            if(tmp[words[i].charCodeAt(j) - 97] == 0){
                flag = false;
                break;
            }
            tmp[words[i].charCodeAt(j) - 97]--;
        }
        if(flag) res += words[i].length;
    }
    return res;
};
