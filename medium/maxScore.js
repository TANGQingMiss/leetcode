/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
//几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。
//每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。
//你的点数就是你拿到手中的所有卡牌的点数之和。
//给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。
//维护一个len-k的窗口，保证窗口里面和最小，然后剩余的k个数的和就是最大
var maxScore = function(cardPoints, k) {
    let len = cardPoints.length, sum = 0;
    for(let i = 0; i < len; i++){
        sum += cardPoints[i];
    }
    let min = Number.MAX_VALUE, tmp = 0;
    let length = len - k;
    for(let i = 0; i < len; i++){
        tmp += cardPoints[i];
        if(i >= length){
            tmp -= cardPoints[i-length];
        }
        if(i >= length - 1){
            min = Math.min(min,tmp);
        }
    }
    return sum - min;
};
