/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if(!name || !typed) return false;
    if(typed.length < name.length) return false;
    //name and typed should have the same ahphabet and with the same order
    //use two pointers
    let i = 0;
    let j = 0;
    while(i < name.length && j < typed.length){
        if(name.charAt(i) == typed.charAt(j)){
            i++;
            j++;
        }else if(j > 0 && typed.charAt(j) == typed.charAt(j-1)){
            j++;
        }else{
            return false;
        }
    }
    return i == name.length;
    
};
