/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let s1 = [];
    for(let i = 0; i < s.length; i++){
        if((s[i] >= '0' && s[i] <= '9') || s[i] == '+' 
            || s[i] == '-' || s[i] == '*' || s[i] == '/'){
                s1.push(s[i]);
            }
    }
    let res = 0;
    let d = 0;
    let nums = [];
    let sign = '+';
    for(let i = 0; i < s1.length; i++){
        if(s1[i] >= '0'){
            d = d * 10 + parseInt(s1[i]);
        }
        if(s1[i] < '0' || i == s1.length - 1){
            if(sign == '+'){
                nums.push(d);
            }else if(sign == '-'){
                nums.push(-d);
            }else if(sign == '*'){
                let tmp = nums.pop() * d;
                nums.push(tmp);
            }else{
                let tmp = parseInt(nums.pop() / d);
                nums.push(tmp);
            }
            sign = s1[i];
            d = 0;
        }
    }
    for(let i = 0; i < nums.length; i++){
        res += nums[i];
    }
    return res;
};
