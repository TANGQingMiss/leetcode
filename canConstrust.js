/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) return false;
    while(ransomNote.length){
        let currentWord = ransomNote[0];
        let index = magazine.indexOf(currentWord);
        if(index == -1) return false;
        ransomNote = ransomNote.slice(1);
        magazine = magazine.slice(0,index) + magazine.slice(index + 1);
    }
    return true;
};
