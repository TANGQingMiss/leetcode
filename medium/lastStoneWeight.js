/**
 * @param {number[]} stones
 * @return {number}
 */
// 有一堆石头，每块石头的重量都是正整数。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块石头。返回此石头最小的可能重量。如果没有石头剩下，就返回 0。

// 首先问题可以转换为在给定数组里选取部分项使得和最为接近数组总和的一半。(这个就不赘述了)
//我一开始一直想不明白为什么它可以是一个背包问题。因为背包问题要有两个数组，一个是重量的，一个是利润的。我们要在有限的容量内获取最大的价值。而这里只有一个数组。它是重量呢？还是价值呢？如果是其中一个，另一个又在哪？但是，如果我们这么想，这个数组即是重量又是价值。就是说如果你重量为1，那么你的价值也为1。 而容量呢，就是数组总和的一半。这样就可以转换成求背包问题的的最大价值。
var lastStoneWeightII = function (stones) {
  let halfSum = stones.reduce((tol, cur) => tol + cur) / 2;
  capacity = Math.floor(halfSum);

  const weight = stones;
  const price = stones;

  //构造dp
  const dp = Array(price.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  //初始化第一行
  for (let j = weight[0]; j <= capacity; j++) {
    dp[0][j] = price[0];
  }

  //计算
  for (let i = 1; i < price.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else {
        dp[i][j] = Math.max(dp[i - 1][j], price[i] + dp[i - 1][j - weight[i]]);
      }
    }
  }
  return Math.abs(2 * dp[price.length - 1][capacity] - 2 * halfSum);
};
