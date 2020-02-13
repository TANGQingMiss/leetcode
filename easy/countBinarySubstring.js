/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    if(s == null || s.length <= 1) return 0; 
    //count continous 1 or 0 and store them in an array
    let tmp = [];
    let count = 1;
    for(let i = 0; i < s.length-1; i++){
        if(s.charAt(i) == s.charAt(i+1)){
            count++;
        }else{
            tmp.push(count);
            count = 1;
        }
    }
    tmp.push(count);
    if(tmp.length == 1) return 0;
    let res = 0;
    for(let j = 0; j < tmp.length - 1; j++){
        res += Math.min(tmp[j],tmp[j+1]);
    }
    return res;
};
