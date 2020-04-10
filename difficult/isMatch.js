/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
var isMatch = function(s, p) {
    if(p.length == 0) return s.length == 0;
    let first_match = s.length != 0 && (s[0] == p[0] || p[0] == '.');
    if(p.length >= 2 && p[1] == '*'){
        return isMatch(s,p.substring(2)) || (first_match && isMatch(s.substring(1),p));
    }else{
        return first_match && isMatch(s.substring(1),p.substring(1));
    }
};
