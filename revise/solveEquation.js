/**
 * @param {string} equation
 * @return {string}
 */
// 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。
// 如果方程没有解，请返回“No solution”。
// 如果方程有无限解，则返回“Infinite solutions”。
// 如果方程中只有一个解，要保证返回值 x 是一个整数

var solveEquation = function(equation) {
  let xCount = 0; // x的数量
  let param = 0; // 剩余数值
  let arr = equation.split('=');
  let helper = function (equation, sym) {
    let tempParam = '';
    let symbol = '+'; // 当前符号
    let i = 0;
    equation += '+' // 等式最后加上一个'+'为了处理最后的剩余数值
    while(equation[i]) {
      let char = equation[i];
      if (char === 'x') {
        let temp = parseInt(tempParam  || 1)
        tempParam = '';
        symbol === sym ? xCount += temp : xCount -= temp
      } else if (char === "+" || char === "-") {
        let temp = parseInt(tempParam || 0)
        tempParam = '';
        symbol === sym ? param-=temp : param+=temp
        symbol = char
      } else {
        tempParam += char;
      }
      ++i;
    }
  }
  helper(arr[0], "+")
  helper(arr[1], "-")
  if (xCount === 0 && param === 0) return "Infinite solutions"
  if (xCount === 0) return "No solution"
  return 'x=' + (param/xCount)
};
