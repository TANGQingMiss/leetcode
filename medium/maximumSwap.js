/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if(num <= 9) return num;
    let str = (""+num).split('');
    let str2 = (""+num).split('');
    str2 = str2.sort(function(x,y){return y - x;});
    let len = str.length;
    let idx = -1;
    for(let i = 0; i < len; i++){
        if(str[i] != str2[i]){
            idx = i;
            break;
        }
    }
    if(idx == -1) return num;
    for(let i = len - 1; i >= idx + 1; i--){
        if(str[i] == str2[idx]){
            let tmp = str[idx];
            str[idx] = str[i];
            str[i] = tmp;
            break;
        }
    }
    return parseInt(str.join(''));
};
