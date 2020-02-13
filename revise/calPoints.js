/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    if(ops == null || ops.length == 0) return 0;
    let res = 0;
    for(let i = 0; i < ops.length;i++){
        switch(ops[i]){
            case "+":
                ops[i] = +ops[i-1]+ +ops[i-2];
                res += +ops[i];
                break;
            case "D":
                ops[i] = 2 * ops[i - 1];
                res += +ops[i];
                break;
            case "C":
                res -= +ops[i-1];
                ops.splice(i-1,2);
                i -= 2;
                break;
            default:
                res += +ops[i];
        }
    }
    return res;
};
