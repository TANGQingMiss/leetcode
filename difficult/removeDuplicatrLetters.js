/**
 * @param {string} s
 * @return {string}
 */
//给你一个仅包含小写字母的字符串，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）
var removeDuplicateLetters = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let tmp = s.charAt(i);
        if(stack.indexOf(tmp) != -1) continue;
        while(stack.length > 0 && stack[stack.length-1] > tmp && s.slice(i).indexOf(stack[stack.length-1]) != -1){
            stack.pop();
        }
        stack.push(tmp);
    }
    let res = "";
    while(stack.length){
        res += stack.shift();
    }
    return res;
};
