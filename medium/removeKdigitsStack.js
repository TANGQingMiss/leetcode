/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    if(num.length == k) return "0";
    let res = [];
    let cnt = 0;
    for(let j = 0; j < num.length; j++){
        if(res.length == 0 || cnt >= k) res.push(num[j]);
        else{
            while(res.length > 0 && num[j] < res[res.length-1] && cnt < k){
                res.pop();
                cnt++;
            }res.push(num[j]);
        }
    }
    while(cnt < k){
        res.pop();
        cnt++;
    }
    while(res[0] == '0'){
        res.shift();
    }
    if(res.length == 0) return "0";
    else return res.join('');

};
