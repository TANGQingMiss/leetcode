/**
 * @param {number[]} A
 * @return {number}
 */
//给定一个数组 A，将其划分为两个不相交（没有公共元素）的连续子数组 left 和 right， 使得：
//left 中的每个元素都小于或等于 right 中的每个元素。
//left 和 right 都是非空的。
//left 要尽可能小。
var partitionDisjoint = function(A) {
    //从左向右记录当前最大值
    //记录左侧最大值
    if(A == null || A.length == 0) return 0;
    let leftMax = A[0];
    let max = A[0];
    let idx = 0;
    for(let i = 0; i < A.length; i++){
        max = Math.max(max,A[i]);
        if(A[i] < leftMax){
            leftMax = max;
            idx = i;
        }
    }
    return idx+1;
};
