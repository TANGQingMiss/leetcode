/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word==null || word.length == 0) return false;
    if(word.toUpperCase()==word || word.toLowerCase()==word) return true;
    if(word.substring(1).toLowerCase()==word.substring(1)) return true;
    return false;
};
