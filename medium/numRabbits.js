/**
 * @param {number[]} answers
 * @return {number}
 */
//森林中，每个兔子都有颜色。其中一些兔子告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。
//返回森林中兔子的最少数量
//要想使得兔子数量最小，那么尽量将报同样数量的视为同一颜色，但为了不矛盾，需要使用map记录对应颜色兔子最大的出现次数
//报0的兔子一定是独一无二的直接++
var numRabbits = function(answers) {
    let map = new Map(), res = 0;

    for (let a of answers) {
        if (a == 0) {
            res++;
        } else if (!map.has(a)) {
            res += (1 + a);
            map.set(a, a);
        } else {
            map.set(a, map.get(a) - 1);
            if (map.get(a) == 0) {
                map.delete(a);
            }
        }
    }
    return res;
};
