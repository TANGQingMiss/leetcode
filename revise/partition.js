/**
 * @param {string} s
 * @return {string[][]}
 */
//给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
//返回 s 所有可能的分割方案
var partition = function(s) {
    function isPalindrome(s){
        let i = 0, j = s.length - 1;
        while(i < j){
            if(s[i] != s[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    let res = [];
    if (s.length === 0) {
        return res;
    }
    findPalidrome(0, s, res, []);
    return res;

function findPalidrome(start, s, res, curArr) {
    if (start === s.length) {
        res.push(curArr);
        return;
    }

    for (let i = start; i < s.length; i++) {
        let subStr = s.slice(start, i + 1);
        if (subStr && isPalindrome(subStr)) {
            findPalidrome(i + 1, s, res, [...curArr, subStr]);
        }
    }
}
};
