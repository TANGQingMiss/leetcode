/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let tmp = [];
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] != ')'){
            stack.push(s[i]);
        }else{
            while(stack[stack.length-1] != '('){
                tmp.push(stack.pop());
            }stack.pop();
            while(tmp.length > 0){
                stack.push(tmp.shift());
            }
        }
    }
    return stack.join('');
};
