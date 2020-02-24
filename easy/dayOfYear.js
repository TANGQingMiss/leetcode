/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    date = date.split('-');
    let year = date[0];
    let month = date[1];
    let day = date[2];
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    let days = [31,28,31,30,31,30,31,31,30,31,30,31];
    let res = 0;
    let idx = months.indexOf(month);
    for(let i = 0; i < idx; i++){
        res += days[i];
    }
    res += parseInt(day);
    if(parseInt(year) != 1900 && parseInt(year) % 4 == 0 
        && parseInt(day) != 29 && idx >= 2) {
        res += 1;
    }
    return res;
};
