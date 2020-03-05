/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if(s == null || s.length == 0) return "";
    let stack = [];//use stack to store element
    for(let i = 0; i < s.length; i++){
        if(s[i] != ']'){//if not ], push
            stack.push(s[i]);
        }else{ //when meeting a ],find str to get to the [
            let tmp = "";
            while(stack[stack.length-1] != '['){
                tmp = stack.pop() + tmp;
            }
            stack.pop();//pop [
            let str = "";
            while(stack.length > 0 && stack[stack.length-1] >= '0' 
            && stack[stack.length-1] <= '9'){
                str = stack.pop()+str;
            }
            let num = parseInt(str);//find repeating times
            let resStr = "";
            for(let i = 0; i < num; i++){
                resStr += tmp;
            }
            stack.push(resStr)//get result and push
        }
    }
    return stack.join('');
};
