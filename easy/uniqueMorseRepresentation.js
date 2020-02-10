/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    if(words == null || words.length == 0) return 0;
    if(words.length == 1) return 1;
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..",
    "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r',
    's','t','u','v','w','x','y','z'];
    let map = new Map();
    for(i = 0; i < words.length; i++){
        let match = "";
        for(let j = 0; j < words[i].length; j++){
            match += morse[letter.indexOf(words[i].charAt(j))];
        }
        map.set(match,map.has(match)?map.get(match)+1:1);
    }
    let res = 0;
    for(let [key,value] of map){
        if(value > 0) res++;
    }
    return res;
};
