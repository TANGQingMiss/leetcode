/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];
    let str = "";
    let arr = new Array(s.length);
    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == '('){
            stack.push(i);
            arr[i] = false;
        }else if(s.charAt(i) == ')'){
            if(stack.length > 0){
                arr[stack.pop()] = true;
                arr[i] = true;
            }else{
                arr[i] = false;
            } 
        }else{
            arr[i] = true;
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == true){
            str += s.charAt(i);
        }
    }
    return str;
};
