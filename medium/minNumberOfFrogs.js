/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
//给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 “croak” 。请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目
//要想发出蛙鸣 "croak"，青蛙必须 依序 输出 ‘c’, ’r’, ’o’, ’a’, ’k’ 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。
var minNumberOfFrogs = function(croakOfFrogs) {
    let c = 0, r = 0, o = 0, a = 0, k = 0;
    let res = 0;
    for(let i = 0; i < croakOfFrogs.length; i++){
        if(croakOfFrogs[i] == 'c') c++;
        else if(croakOfFrogs[i]=='r') r++;
        else if(croakOfFrogs[i]=='o') o++;
        else if(croakOfFrogs[i]=='a') a++;
        else if(croakOfFrogs[i]=='k') k++;
        res = Math.max(c-k,res);
        if(c >= r && r >= o && o >= a && a >= k) continue;
        else return -1;
    }
    if(c == a && a == o && o == k && k == r){
        return res;
    }else return -1;
};
