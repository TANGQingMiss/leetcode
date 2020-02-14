/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    if(N == 1) return 0;
    let res = 0;
    for(let i = 1; i <= N; i++){
        let tmp = i.toString();
        if(tmp.indexOf('3') == -1 && tmp.indexOf('4') == -1 && tmp.indexOf('7') == -1){
            if(tmp.indexOf('2') != -1 || tmp.indexOf('5') != -1 || tmp.indexOf('6') != -1 || tmp.indexOf('9') != -1){
                res += 1;
            }
        }
    }
    return res;
};
