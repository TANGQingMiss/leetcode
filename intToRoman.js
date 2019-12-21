/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let diction = [
        {s:"I",n:1},
        {s:"IV",n:4},
        {s:"V",n:5},
        {s:"IX",n:9},
        {s:"X",n:10},
        {s:"XL",n:40},
        {s:"L",n:50},
        {s:"XC",n:90},
        {s:"C",n:100},
        {s:"CD",n:400},
        {s:"D",n:500},
        {s:"CM",n:900},
        {s:"M",n:1000}
    ];

    let result = "";
    while(num>0){
        for(let i = diction.length-1; i >= 0; i--){
            if(num-diction[i].n >= 0){
                result += diction[i].s;
                num -= diction[i].n;
                break;
            }
        }
    }
    return result;
};
