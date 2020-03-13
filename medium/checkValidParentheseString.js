/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let left = [];
    let star = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] == '(') left.push(i);
        else if(s[i] == '*') star.push(i);
        else{
            if(left.length == 0 && star.length == 0) return false;
            if(left.length > 0) left.pop();
            else star.pop();
        }
    }
    while(left.length > 0 && star.length > 0){
        if(left.pop() > star.pop()) return false;
    }
    return left.length == 0;
};
