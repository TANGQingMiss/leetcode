/**
 * @param {string} s
 * @return {string}
 */
//给定一个字符串，请将字符串里的字符按照出现的频率降序排列
var frequencySort = function(s) {
    if(s.length <= 1) return s;
    let list = s.split('').sort();//sort ahphabets
    let arr = [];
    let idx = 0;
    for(let i = 0; i < s.length; i++){
        if(!list[i+1]){
            arr.push(list.slice(idx,i+1).join(''));
        }else if(list[i+1] != list[i]){
            arr.push(list.slice(idx,i+1).join(''));
            idx = i + 1;
        }
    }
    return arr.sort(function(a,b){return b.length - a.length;}).join('');
};
