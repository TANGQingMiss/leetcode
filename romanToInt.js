/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var len = s.length;
    if(len == 0) return 0;
    var sum = 0;
    for(let i = 0; i < len; i++){
        switch(s[i]){
            case "V":
                sum += 5;
                break;
            case "L":
                sum += 50;
                break;
            case "D":
                sum += 500;
                break;
            case "M":
                sum += 1000;
                break;
            case "I":
                switch(s[i+1]){
                    case "V":
                        sum += 4;
                        i += 1;
                        break;
                    case "X":
                        sum += 9;
                        i += 1;
                        break;
                    default:
                        sum += 1;
                        break;
                }
                break;
            case "X":
                switch(s[i+1]){
                    case "L":
                        sum += 40;
                        i += 1;
                        break;
                    case "C":
                        sum += 90;
                        i += 1;
                        break;
                    default:
                        sum += 10;
                        break;
                }
                break;
            case "C":
                switch(s[i+1]){
                    case "D":
                        sum += 400;
                        i += 1;
                        break;
                    case "M":
                        sum += 900;
                        i += 1;
                        break;
                    default:
                        sum += 100;
                        break;
                }
                break;
        }
    }

    return sum;

};
