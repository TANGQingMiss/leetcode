/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let number = [];
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] == '+'){
            let a = number.pop();
            let b = number.pop();
            number.push(b + a);
        }else if(tokens[i] == '-'){
            let a = number.pop();
            let b = number.pop();
            number.push(b - a);
        }else if(tokens[i] == '*'){
            let a = number.pop();
            let b = number.pop();
            number.push(b * a);
        }else if(tokens[i] == '/'){
            let a = number.pop();
            let b = number.pop();
            number.push(parseInt(b / a));
        }else{
            number.push(parseInt(tokens[i]));
        }
    }
    return number[0];
};
