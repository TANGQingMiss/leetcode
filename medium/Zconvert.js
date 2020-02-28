/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1) return s;
    let res = "";
    let times = numRows * 2 - 2;
    //first line
    for(let i = 0; i < s.length; i += times){
        res += s[i];
    }
    //middle part
    for(let i = 1; i < numRows - 1; i++){
        for(let j = i; j < s.length; ){
            res += s[j];
            j += (numRows - i) * 2 - 2;
            if(j < s.length){
                res += s[j];
                j += 2 * i;
            }
        }
    }
    //last line
    for(let i = numRows - 1; i < s.length; i += times){
        res += s[i];
    }
    return res;
};
