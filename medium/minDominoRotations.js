/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
// 在一排多米诺骨牌中，A[i] 和 B[i] 分别代表第 i 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）

// 我们可以旋转第 i 张多米诺，使得 A[i] 和 B[i] 的值交换。

// 返回能使 A 中所有值或者 B 中所有值都相同的最小旋转次数。

// 如果无法做到，返回 -1.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/minimum-domino-rotations-for-equal-row

var minDominoRotations = function(A, B) {
    let count = new Array(6).fill(0);
    //note each apprearing times of 1 - 6
    for(let i = 0; i < A.length; i++){
        count[A[i]-1]++;
    }
    for(let i = 0; i < B.length; i++){
        count[B[i]-1]++;
    }
    let half = A.length;
    for(let i = 0; i < 6; i++){
        if(count[i] >= half){//only if count[i] >= half, it's possible to have a solution
            let res = 0;
            let num = i + 1;
            for(let j = 0; j < A.length; j++){
                if(A[j] == num || B[j] == num){
                    if(A[j] == num && B[j] != num){
                        res++;
                    }
                    if(A[j] == num && B[j] == num){
                        half--;
                    }
                }else{
                    return -1;
                }
            }
            return Math.min(res,half-res);
        }
    }
    return -1;
};
