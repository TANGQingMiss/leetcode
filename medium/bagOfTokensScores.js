/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
// 你的初始能量为 P，初始分数为 0，只有一包令牌。

// 令牌的值为 token[i]，每个令牌最多只能使用一次，可能的两种使用方法如下：

// 如果你至少有 token[i] 点能量，可以将令牌置为正面朝上，失去 token[i] 点能量，并得到 1 分。
// 如果我们至少有 1 分，可以将令牌置为反面朝上，获得 token[i] 点能量，并失去 1 分。
// 在使用任意数量的令牌后，返回我们可以得到的最大分数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/bag-of-tokens

var bagOfTokensScore = function(tokens, P) {
    if(tokens.length == 0 || P == 0) return 0;
    tokens.sort(function(x,y){return x - y;});
    //priority: choose the smallest for +1
    //priority: if not, choose the greatest one for -1
    let i = 0;
    let j = tokens.length - 1;
    let res = 0;
    while(i <= j){
        if(tokens[i] > P){
            if(res > 0){
                P += tokens[j] - tokens[i];
                i++;
                j--;
            }else return res;
        }else{
            P -= tokens[i];
            i++;
            res++;
        }
    }
    return res;
};
