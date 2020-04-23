/**
 * @param {string} s
 * @return {string}
 */
//给定一个非空字符串，其中包含字母顺序打乱的英文单词表示的数字0-9。按升序输出原始的数字
var originalDigits = function(s) {
    let alpha = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++){
        alpha[s.charCodeAt(i)-97]++;
    }
    let res = new Array(10).fill(0);//count 0 - 9
    res[0] = alpha[25];//0 - 'z'
    res[2] = alpha[22];//2 - 'w'
    res[8] = alpha[6]; //8 - 'g'
    res[6] = alpha[23]; //6 - 'x'
    res[3] = alpha[19] - res[2] - res[8];
    res[4] = alpha[17] - res[3] - res[0];
    res[7] = alpha[18] - res[6];
    res[1] = alpha[14] - res[4] - res[2] - res[0];
    res[5] = alpha[21] - res[7];
    res[9] = alpha[8] - res[8] - res[6] - res[5];
    let ans = "";
    for(let i = 0; i < res.length; i++){
        while(res[i] > 0){
            ans += i;
            res[i]--;
        }
    }
    return ans;
};
