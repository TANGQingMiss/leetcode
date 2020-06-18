/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。
// 不要使用系统的 Math.random() 方法
// 首先获取等概率的 1,2,3,4,5 (如果rand7()结果>5则抛弃重新来一次 根据对称性原理 1,2,3,4,5等概率)
// 再以50%的概率是否加上5 这样可以得到等概率的1-10
var rand10 = function() {
    let result = rand7()
        while(result>5) result = rand7()
        // 等概率1-6
        let temp = rand7()
        while(temp === 7) temp = rand7()
        return temp <= 3 ? result : result + 5
};
