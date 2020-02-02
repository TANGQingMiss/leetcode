/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == '') return true;
    let stack = new Array();
    let res = true;
    for(let i = 0; i < s.length; i++){
        if(s[i]==="(" || s[i]==="[" || s[i]==="{"){
            stack.unshift(s[i])
        }else{
            if(stack[0] === "{" && s[i] === "}") stack.shift()
            else if(stack[0] === "(" && s[i] === ")") stack.shift()
            else if (stack[0] === "[" && s[i] === "]") stack.shift()
            else res = false;
        }
    }
    return stack.length === 0 && res    
};
