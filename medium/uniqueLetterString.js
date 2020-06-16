/**
 * @param {string} s
 * @return {number}
 */
//本题将会给你一个字符串 s ，我们需要返回 countUniqueChars(t) 的总和，其中 t 是 s 的子字符串。注意，某些子字符串可能是重复的，但你统计时也必须算上这些重复的子字符串（也就是说，你必须统计 s 的所有子字符串中的唯一字符）
var uniqueLetterString = function(S) {
   var sum = 0;
		for (var i = 0; i < S.length; ++i) {
			for (var j = i - 1; j > -1 && S[j] != S[i]; --j);
			for (var k = i + 1; k < S.length && S[k] != S[i]; ++k);
			sum += (i - j)*( k - i);
		}
	return sum%1000000007;
};
