/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
    'R','S','T','U','V','W','X','Y','Z'];
    let res = '';
    while(n > 0){
        let tmp = n % 26;
        if(tmp == 0) {
            res = 'Z'+res;
            n--;
        }
        else{
            res = alphabet[tmp - 1] + res;
        }
        n = Math.floor(n / 26);
    }
    return res;
};
