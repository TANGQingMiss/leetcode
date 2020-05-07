/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//一个 「开心字符串」定义为：仅包含小写字母 ['a', 'b', 'c'].
//两个相邻字母不相同
//给你两个整数 n 和 k ，你需要将长度为 n 的所有开心字符串按字典序排序。
//请你返回排序后的第 k 个开心字符串，如果长度为 n 的开心字符串少于 k 个，那么请你返回 空字符串 。
var getHappyString = function(n, k) {
    let s = [],ans = "";
    let cnt = 0;
    dfs(n,k);
    return cnt == k ? ans : "";

    function dfs(n,k){
        if(cnt == k) return;
        if(s.length == n){
            cnt++;
            ans = s.join('');
            return;
        }
        for(let c = 97; c <= 99; c++){
            if(s.length > 0 && s[s.length-1] == String.fromCharCode(c)) continue;
            s.push(String.fromCharCode(c));
            dfs(n,k);
            s.pop();
        }
    }
};
