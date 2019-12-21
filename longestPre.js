/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var lenStrs = strs.length; //length of strings
    if(lenStrs == 0) return '';
    if(lenStrs == 1) return strs[0];

    var tmp  = strs[0].length; //try to find the smallest string in strings
    for(let i = 1; i < lenStrs; i++){
        if (strs[i].length < tmp) tmp = strs[i].length;
    }

    var sameList = '';
    for(let j = 0; j < tmp; j++){
        for(let k = 1; k < lenStrs;k++){
            if(strs[k][j] != strs[0][j]) return sameList;
        }
        sameList += strs[0][j];
    }

    return sameList;
};
