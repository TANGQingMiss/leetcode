/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
//给定一个字符串和一个字符串字典，找到字典里面最长的字符串，该字符串可以通过删除给定字符串的某些字符来得到
var findLongestWord = function(s, d) {
    d.sort(function(x,y){return x.length - y.length;});
    let longest = "";
    for(let i = 0; i < d.length; i++){
        let str = d[i];
        let l1 = longest.length;
        let l2 = str.length;
        if(l2 < l1 || (l1 == l2 && longest < str)) continue;
        if(isValid(s,str)){
            longest = str;
        }
    }
    return longest;

    function isValid(s,str){
        let i = 0;
        let j = 0;
        while(i < s.length && j < str.length){
            if(s.charAt(i) == str.charAt(j)){
                i++;
                j++;
            }else{
                i++;
            }
        }
        return j == str.length;
    }
};
