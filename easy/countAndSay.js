/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res = '1';
    for(let i = 1; i < n; i++){
        let tmp = '';
        let c = res.charAt(0);
        let count = 1;
        for(let j = 1; j < res.length; j++){
            let cc = res.charAt(j);
            if(c == cc){
                count++;
            }else{
                tmp += count;
                tmp += c;
                count = 1;
                c = cc;
            }
        }
        tmp += count;
        tmp += c;
        res = tmp;
    }
    return res;
};
