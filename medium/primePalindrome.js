//求出大于或等于 N 的最小回文素数。
var primePalindrome = function(N) {
  if (N <= 11) {
    if (N > 7) return 11 
    if (N > 5) return 7 
    if (N > 3) return 5 
    if (N > 2) return 3
    return 2 
  }
  let isPrime = function (N) {
    if (N < 2) return false;
    for (let d = 2, R = Math.sqrt(N); d <= R; ++d)
        if (N % d == 0) return false;
    return true;
  }
  let getNum = function(num) {
    return parseInt(num + num.toString().split('').reverse().slice(1).join(''))
  }
  for (let i = Math.max(Math.floor(Math.sqrt(N)), 10); i < 20000; ++i) {
    let num = getNum(i)
    if (num >= N && isPrime(num)) {
      return num 
    }
  }
}
