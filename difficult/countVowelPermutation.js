/**
 * @param {number} n
 * @return {number}
 */
// 给你一个整数 n，请你帮忙统计一下我们可以按下述规则形成多少个长度为 n 的字符串：
// 字符串中的每个字符都应当是小写元音字母（'a', 'e', 'i', 'o', 'u'）
// 每个元音 'a' 后面都只能跟着 'e'
// 每个元音 'e' 后面只能跟着 'a' 或者是 'i'
// 每个元音 'i' 后面 不能 再跟着另一个 'i'
// 每个元音 'o' 后面只能跟着 'i' 或者是 'u'
// 每个元音 'u' 后面只能跟着 'a'
var countVowelPermutation = function(n) {
    let a = 1, e = 1, i = 1, o = 1, u = 1;
    let mod = Math.pow(10,9)+7;
    for(let x = 2; x <= n; x++){
        let a_tmp = e;
        let e_tmp = (a+i) % mod;
        let i_tmp = (a+e+o+u) % mod;
        let o_tmp = (i+u)%mod;
        let u_tmp = a;

        a = a_tmp;
        e = e_tmp;
        i = i_tmp;
        o = o_tmp;
        u = u_tmp;
    }
    return ((a+e+i+o+u)%mod);
};
