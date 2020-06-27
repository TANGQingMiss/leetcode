/**
 * @param {string} input
 * @return {number[]}
 */
//给定一个含有数字和运算符的字符串，为表达式添加括号，改变其运算优先级以求出不同的结果。你需要给出所有可能的组合的结果。有效的运算符号包含 +, - 以及 * 
var diffWaysToCompute = function(input) {
    var result = []
    for(var i = 0;i < input.length;i++){
        var c = input.charAt(i)
        if(c == '+' || c == '-' || c == '*'){
            var left = diffWaysToCompute( input.substring(0,i))
            var right = diffWaysToCompute( input.substring(i+1))
            for(var j = 0; j < left.length;j++){
                for(var n = 0; n <right.length;n++){
                    switch(c){
                        case '+':
                            result.push(left[j]+right[n])
                            break
                        case '-':
                            result.push(left[j]-right[n])
                            break
                        case '*':
                            result.push(left[j]*right[n])
                            break
                    }

                }
            }
        }
    }
    if(result.length == 0){
        result.push(parseInt(input))
    }
    return result
};
