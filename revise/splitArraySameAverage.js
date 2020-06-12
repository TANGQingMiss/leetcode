/**
 * @param {number[]} A
 * @return {boolean}
 */
//给定的整数数组 A ，我们要将 A数组 中的每个元素移动到 B数组 或者 C数组中。（B数组和C数组在开始的时候都为空）
//返回true ，当且仅当在我们的完成这样的移动后，可使得B数组的平均值和C数组的平均值相等，并且B数组和C数组都不为空
var splitArraySameAverage = function(A) {
    let len = A.length;
    let sum = 0;
    for(let i = 0; i < len; i++){
        sum += A[i];//总和
    }
    A.sort(function(x,y){return x - y;});//先排序
    for(let i = 1; i <= Math.floor(len / 2); i++){
        let remainder = sum * i % len;
        let target = Math.floor(sum * i / len);
        if(remainder == 0 && helper(A,0,i,target)){
            return true;
        }
    }
    return false;

    function helper(A,begin,len,target){
        if(len == 0) return target == 0;
        if(target < len * A[begin]){
            return false;
        }
        for(let i = begin; i <= A.length - len; i++){
            if(i > begin && A[i] == A[i-1]) continue;
            if(helper(A,i+1,len-1,target-A[i])) return true;
        }
        return false;
    }
};
