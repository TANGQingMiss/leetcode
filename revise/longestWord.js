/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    if(words == null || words.length == 0) return null;
    if(words.length == 1) return words[0];
    words = words.sort();
    let set = new Set();
    let res = "";
    for(let i = 0; i < words.length; i++){
        if(words[i].length == 1 ||  set.has(words[i].substring(0,words[i].length - 1))){
            res = words[i].length > res.length ? words[i] : res;
            set.add(words[i]);
        }
    }
    return res;
};
