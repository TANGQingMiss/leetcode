/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if(words.length == 1) return true;
    for(let i = 0; i < words.length - 1; i++){
        let one = words[i];
        let two = words[i+1];
        let idx = Math.min(one.length,two.length);
        let flag = 0;
        for(let j = 0; j < idx; j++){
            if(order.indexOf(one[j]) < order.indexOf(two[j])){
                flag = 1;
                break;
                //once < , true, break inner cycle
            }else if(order.indexOf(one[j]) > order.indexOf(two[j])){
                //once > , return false
                return false;
            }
        }
        //check case: apple,app
        if(flag == 0 && two.length == idx){
            return false;
        }
    }
    return true;
};
