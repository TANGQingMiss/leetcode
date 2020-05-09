/**
 * @param {string} s
 * @return {string[]}
 */
//给你一个字符串 s。请你按照单词在 s 中的出现顺序将它们全部竖直返回。
//单词应该以字符串列表的形式返回，必要时用空格补位，但输出尾部的空格需要删除（不允许尾随空格）
var printVertically = function(s) {
    let res = [];
    s = s.split(" ");
    let cnt = 0;
    while(true){
        let tmp = "";
        let blank = "";
        for(let i = 0; i < s.length; i++){
            if(cnt < s[i].length){
                tmp += blank + s[i].charAt(cnt);
                blank = "";
            }else{
                blank += " ";
            }
        }
        if(tmp.length == 0) break;
        cnt++;
        res.push(tmp);
    }
    return res;
};
