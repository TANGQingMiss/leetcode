/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
//有两个长度相同的字符串 s1 和 s2，且它们其中 只含有 字符 "x" 和 "y"，你需要通过「交换字符」的方式使这两个字符串相同。
var minimumSwap = function(s1, s2) {
    let n = s1.length;
    let xy = 0, yx = 0;
    for(let i = 0; i < n; i++){
        if(s1[i] != s2[i]){
            if(s1[i] == 'x') xy++;
            else yx++;
        }
    }
    let restxy = xy & 1, restyx = yx & 1;
    if(restxy ^ restyx) return -1;
    return Math.floor(xy / 2) + Math.floor(yx / 2) + (restxy ? 2 : 0);
};
