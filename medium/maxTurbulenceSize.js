/**
 * @param {number[]} A
 * @return {number}
 */
//如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是湍流子数组
var maxTurbulenceSize = function(A) {
 let N = A.length;
  let ans = 1;
  let anchor = 0;

  for (let i = 1; i < N; ++i) {
    let c =compare(A[i-1],A[i])
    if (i == N - 1 || c * compare(A[i], A[i + 1]) != -1) {
        if (c != 0) ans = Math.max(ans, i - anchor + 1);
        anchor = i;
    }
  }

  return ans;

};

function compare(a, b) {
  if (a > b) return 1
  if (a < b) return -1
  return 0
}
