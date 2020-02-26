/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function(queries, words) {
    let res = [];
    let numQuery = [];
    for(let i = 0; i < queries.length; i++){
        let tmp = queries[i];
        let charcode = new Array(26);
        for(let i = 0; i < 26; i++){
            charcode[i] = 0;
        }
        for(let i = 0; i < tmp.length; i++){
            charcode[tmp.charCodeAt(i) - 97]++;
        }
        //find the number of smallest one
        for(let i = 0; i < 26; i++){
            if(charcode[i] > 0){
                numQuery.push(charcode[i]);
                break;
            }
        }
    }

    let numWords = [];
    for(let i = 0; i < words.length; i++){
        let tmp = words[i];
        let charcode = new Array(26);
        for(let i = 0; i < 26; i++){
            charcode[i] = 0;
        }
        for(let i = 0; i < tmp.length; i++){
            charcode[tmp.charCodeAt(i) - 97]++;
        }
        //find the number of smallest one
        for(let i = 0; i < 26; i++){
            if(charcode[i] > 0){
                numWords.push(charcode[i]);
                break;
            }
        }
    }
    numWords = numWords.sort(function(x,y){return x - y;});
    for(let i = 0; i < numQuery.length; i++){
        for(let j = 0; j < numWords.length; j++){
            if(numWords[j] > numQuery[i]){
                res.push(numWords.length - j);
                break;
            }
        }
        if(numWords[numWords.length - 1] <= numQuery[i]){
            res.push(0);
        }
    }
    return res;
};
