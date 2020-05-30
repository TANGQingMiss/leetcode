/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    let l = target.length;
    let res = "";
    let curi = 0, curj = 0;
    for(let i = 0; i < l; i++){
        let num = target.charCodeAt(i) - 97;
        let r = Math.floor(num / 5);
        let c = num % 5;
        if(target[i] != 'z'){
            while(curi < r){
                res += 'D';
                curi++;
            }
            while(curi > r){
                res += 'U';
                curi--;
            }
        }
        while(curj < c){
            res += 'R';
            curj++;
        }
        while(curj > c){
            res += 'L';
            curj--;
        }
        if(target[i] == 'z'){
            while(curi < r){
                res += 'D';
                curi++;
            }
            while(curi > r){
                res += 'U';
                curi--;
            }
        }
        res += '!';
    }
    return res;
};
