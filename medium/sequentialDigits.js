/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
//我们定义「顺次数」为：每一位上的数字都比前一位上的数字大 1 的整数。
var sequentialDigits = function(low, high) {
    let res = [];
    for(let start = 1; start < 10; start++){
        dfs(0,start,low,high);
    }
    res.sort(function(x,y){return x - y;});
    return res;

    function dfs(val,digit,low,high){
        val = val * 10 + digit;
        if(val > high) return;
        if(val <= high && val >= low){
            res.push(val);
        }
        if(digit < 9){
            dfs(val,digit+1,low,high);
        }
    }
};
