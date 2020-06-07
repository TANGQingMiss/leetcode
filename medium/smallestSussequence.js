/**
 * @param {string} text
 * @return {string}
 */
//返回字符串 text 中按字典序排列最小的子序列，该子序列包含 text 中所有不同字符一次
var smallestSubsequence = function(s) {
    if(s == null || s.length == 0) return "";
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(stack.indexOf(s.charAt(i)) != -1) continue;
        while(stack.length > 0 && stack[stack.length-1] > s.charAt(i) && s.indexOf(stack[stack.length-1],i) != -1){
            stack.pop();
        }
        stack.push(s.charAt(i));
    }
    return stack.join("");
};
