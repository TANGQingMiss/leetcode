/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    if(s.length < k) return s;
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(stack.length == 0 || s[i] != s[i-1]){
            stack.push(1);
        }else{
            stack[stack.length - 1]++;
            if(stack[stack.length - 1] == k){
                s = s.substring(0,i - k + 1) + s.substring(i + 1);
                stack.pop();
                i -= k;
            }
        }
    }
    return s;
};

