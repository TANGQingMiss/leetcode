/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let test = n.toString(2);
    for(let i = 0; i < test.length - 1; i++){
        if(test[i] == test[i+1]){
            return false;
        }
    }
    return true;
};
