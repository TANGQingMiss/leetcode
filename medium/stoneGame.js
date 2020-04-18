/**
 * @param {number[]} piles
 * @return {boolean}
 */
//亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。
//游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。
var stoneGame = function(piles) {
    let dp = new Array(piles.length);
    //dp[i][j] means i->j the first person notes - second person notes
    for(let i = 0; i < piles.length; i++){
        dp[i] = new Array(piles.length).fill(0);
        dp[i][i] = piles[i];
    }
    for(let i = 1; i < piles.length; i++){
        for(let j = 0; j + i < piles.length; j++){
            dp[j][j+i] = Math.max(piles[j+i]-dp[j][j+i-1],piles[j] - dp[j+1][j+i]);
        }
    }
    return dp[0][piles.length-1] > 0;
};
