/**
 * @param {number} d
 * @param {number} f
 * @param {number} target
 * @return {number}
 */
// 这里有 d 个一样的骰子，每个骰子上都有 f 个面，分别标号为 1, 2, ..., f。
// 我们约定：掷骰子的得到总点数为各骰子面朝上的数字的总和。
// 如果需要掷出的总点数为 target，请你计算出有多少种不同的组合情况（所有的组合情况总共有 f^d 种），模 10^9 + 7 后返回
// 1 <= d, f <= 30
// 1 <= target <= 1000
var numRollsToTarget = function(d, f, target) {
    if(target < d || target > d * f) return 0;
    if(d == 1) return 1;
    let MOD = 10**9+7;
    let dp = new Array(31);
    for(let i = 0; i < 31; i++){
        dp[i] = new Array(1001).fill(0);
    }
    for(let i = 1; i <= f; i++){
        dp[1][i] = 1;
    }
    for(let i = 2; i <= d; i++){
        for(let k = 1; k <= f; k++){
            for(let j = 1; j <= f * d; j++){
                if(j < k) continue;
                dp[i][j] = (dp[i][j] + dp[i-1][j-k])%MOD;
            }
        }
    }
    return dp[d][target]%MOD;
};
