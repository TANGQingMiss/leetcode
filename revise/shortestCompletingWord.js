/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    licensePlate = licensePlate.toLowerCase();
    let map = new Map();
    let res = [];

    for(let j = 0; j < words.length; j++){
        for(let i = 0; i < licensePlate.length; i++){
            if(alphabet.indexOf(licensePlate.charAt(i)) != -1){
                map.set(licensePlate.charAt(i),
                map.has(licensePlate.charAt(i))?map.get(licensePlate.charAt(i))+1:1);
            }
        }
        let flag = 0;
        for(let k = 0; k < words[j].length; k++){
            if(map.has(words[j].charAt(k))){
                map.set(words[j].charAt(k),
                map.get(words[j].charAt(k))>0?map.get(words[j].charAt(k))-1:0);
            }
        }
        for(let [key,value] of map){
            if(value != 0){
                flag = 1;
            }
        }

        if(flag == 0){
            res.push(words[j]);
        }
        map.clear();
    }
    if(res.length == 1) return res[0];
    let minLen = res[0].length;
    let minIndex = 0;
    for(let i = 1; i < res.length; i++){
        if(minLen > res[i].length){
            minLen = res[i].length;
            minIndex = i;
        }
    }
    return res[minIndex];
};
