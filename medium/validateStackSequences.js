/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    //check stack permutation
    if(pushed.length == 0) return true;
    let stack = [];
    let j = 0;
    for(let i = 0; i < pushed.length; i++){
        stack.push(pushed[i]);
        while(stack[stack.length-1] == popped[j] && j < pushed.length){
            stack.pop();
            j++;
        }
    }
    if(stack.length == 0) return true;
    while(j < pushed.length){
        if(stack[stack.length-1] == popped[j]){
            stack.pop();
            j++;
        }else return false;
    }
    return true;
};
