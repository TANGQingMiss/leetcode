/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let j = 0;
    for(let i = 0; i < chars.length; i++){
        let tmp = chars[i];
        let count = 1;
        while(i + 1 < chars.length && chars[i + 1] == tmp){
            count++;
            i++;
        }
        chars[j++] = tmp;
        if(count > 1){
            let num = count + "";
            for(let k = 0;k < num.length; k++){
                chars[j++] = num.charAt(k)
            }
        }
    }
    return j;
};
