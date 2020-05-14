/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
//这里有 n 个航班，它们分别从 1 到 n 进行编号。
//我们这儿有一份航班预订表，表中第 i 条预订记录 bookings[i] = [i, j, k] 意味着我们在从 i 到 j 的每个航班上预订了 k 个座位。
//请你返回一个长度为 n 的数组 answer，按航班编号顺序返回每个航班上预订的座位数。
var corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0);
    let start = 0, end = 0, add = 0;
    for(let i = 0; i < bookings.length; i++){
        start = bookings[i][0];
        end = bookings[i][1];
        add = bookings[i][2];
        for(let j = start - 1; j < end; j++){
            res[j] += add;
        }
    }
    return res;
};
