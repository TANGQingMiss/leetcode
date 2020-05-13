/**
 * @param {string} s
 * @return {number}
 */
//给你一个字符串 s ，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u' ，在子字符串中都恰好出现了偶数次
var findTheLongestSubstring = function(s) {
    let vowels = "aeiou";
    let map = new Array(32);//pow(2,5)
    let res = 0, cur = 0;
    map[cur] = -1;
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case 'a':
                cur ^= 1;
                break;
            case 'e':
                cur ^= 2;
                break;
            case 'i':
                cur ^= 4;
                break;
            case 'o':
                cur ^= 8;
                break;
            case 'u':
                cur ^= 16;
                break;
            default:
                break;
        }
        if(map[cur] != null){
            res = Math.max(res,i-map[cur]);
        }else{
            map[cur] = i;
        }
    }
    return res;  
};
