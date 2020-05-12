/**
 * @param {string} s
 * @return {number}
 */
//给你一个以二进制形式表示的数字 s 。请你返回按下述规则将其减少到 1 所需要的步骤数：
//如果当前数字为偶数，则将其除以 2 。
//如果当前数字为奇数，则将其加上 1 。
var numSteps = function(s) {
    let arr = s.split('');
    let res = 0;
    while(arr.length > 1){
        if(arr[arr.length-1] == '1'){//odd + 1
            plusOne(arr);
        }else arr.pop();//even s >> 1
        res++;
    }
    return res;

    function plusOne(arr){
        let flag = false;
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] == '1'){
                arr[i] = '0';
            }else{
                arr[i] = '1';
                flag = true;
                break;
            }
        }
        if(!flag) arr.unshift('1');
    }
};
