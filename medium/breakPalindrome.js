/**
 * @param {string} palindrome
 * @return {string}
 */
//给你一个回文字符串 palindrome ，请你将其中 一个 字符用任意小写英文字母替换，使得结果字符串的字典序最小，且 不是 回文串

//字符串少于等于1时说明无法做到返回空串
//从头检查到中间，如果有不为a的字符，将该字符替换为a即可返回
//单数串的中间字符不需要处理，即使不为a也不能替换该字符，因为替换后还是回文串（把单数串的中间字符认为a即可）
//若检查到中间了都没返回，即都是a，则只需要将最后一个字符替换为b即可返回，第3种情况和第4种情况一样处理
var breakPalindrome = function(palindrome) {
    if(palindrome == null || palindrome.length <= 1) return "";
    for(let i = 0; i < Math.floor(palindrome.length / 2); i++){
        if(palindrome.charAt(i) != "a"){
            return palindrome.substring(0,i) + "a" + palindrome.substring(i+1);
        }
    }
    return palindrome.substring(0,palindrome.length-1) + "b";
};
