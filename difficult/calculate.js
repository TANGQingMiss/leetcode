/**
 * @param {string} s
 * @return {number}
 */
//实现一个基本的计算器来计算一个简单的字符串表达式的值。
//字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格 
var calculate = function(s){
    let arr = [], sum = 0, num = 0, flag = 1;
    s = "+" + s; //前面加一个+号

    for (let i = 0; i < s.length; i++){

        if (s[i] == '+' || s[i] == '-'){ //+-后面可能为数字/空格/左括号
            temp = s[i];
            let need_up = false;
            while(s[i+1] < '0' || s[i+1] > '9'){
                if (s[i+1] == '('){  //将左括号前面的符号压入栈。一个左括号匹配一个+-号
                    need_up = true;
                    arr.push(temp);
                }
                i++;
            }

            //+-号后面的数字，或者+-号后面口号里面的数字
            while(s[i+1] >= '0' && s[i+1] <= '9'){
                num = num*10 + (s[i+1] - '0'); //拼接完整数字
                i++;
            }

            if (temp == '+'){
                sum += flag * num;
            }
            else{
                sum -= flag * num;
            }
            num = 0;

            if (need_up && arr[arr.length-1] == '-'){
                flag *= (-1); //如果左括号前是-号，flag需要反转
            }
        }
        else if(s[i] == ')'){
            if (arr[arr.length-1] == '-'){
                flag *= (-1); //移除-号时，flag需要反转
            }
            arr.pop(); //碰到右括号移除一个运算符
        }
    }
    return sum;
}
