/**
 * @param {number[]} A
 * @return {number}
 */
//给定整数数组 A，每次 move 操作将会选择任意 A[i]，并将其递增 1。
//返回使 A 中的每个值都是唯一的最少操作次数
var minIncrementForUnique = function(A) {
    if(A == null || A.length <= 1) return 0;
    A.sort(function(x,y){return x - y;});
    let move = 0;
    for(let i = 1; i < A.length; i++){
        if(A[i] <= A[i-1]){
            let pre = A[i];
            A[i] = A[i-1]+1;
            move += A[i] - pre;
        }
    }
    return move;
};
