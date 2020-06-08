/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
//给定两个由一些 闭区间 组成的列表，每个区间列表都是成对不相交的，并且已经排序。
//返回这两个区间列表的交集
var intervalIntersection = function(A, B) {
    if(A == null || A.length == 0 || B == null || B.length == 0) return [];
    let res = []  
    let i = 0, j = 0 // 两个指针，分别遍历 A B 数组
    while (i < A.length && j < B.length) {
        let start = Math.max(A[i][0], B[j][0]) // 求交集区间的左界
        let end = Math.min(A[i][1], B[j][1])   // 求交集区间的右界
        if (start <= end) { // 只要形成了区间，就往res里推入
        res.push([start, end])
        }
        A[i][1] < B[j][1] ? i++ : j++ // 谁的右界更短，谁的指针+1
    }
    return res;
};
