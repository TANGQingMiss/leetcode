/**
 * @param {number} N
 * @return {number}
 */
// 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。

// （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/monotone-increasing-digits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var monotoneIncreasingDigits = function(N) {
    if(N <= 9) return N;
    let str = N.toString().split('');
    let idx = str.length;
    for(let i = str.length - 1; i >= 1; i--){
        if(str[i] < str[i-1]){
            idx = i;
            let tmp = parseInt(str[i-1])-1;
            str[i-1] = tmp.toString();
        }
    }
    for(let i = idx; i < str.length; i++){
        str[i] = '9';
    }
    return parseInt(str.join(''));
};
