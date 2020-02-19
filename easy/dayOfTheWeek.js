/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    let arr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    date.setDate(day);
    return arr[date.getDay()];
};
