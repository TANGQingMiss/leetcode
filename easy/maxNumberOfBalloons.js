/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let res = 0;
    //use array to store numbers of b,a,l,o,n
    //find the smallest times
    let tmp = [0,0,0,0,0];
    for(let i = 0; i < text.length; i++){
        switch(text[i]){
            case "b":
                tmp[0]++;
                break;
            case "a":
                tmp[1]++;
                break;
            case "n":
                tmp[2]++;
                break;
            case "l":
                tmp[3]++;
                break;
            case "o":
                tmp[4]++;
                break;
        }
    }
    let minOdd = Math.min.apply(null,tmp.slice(0,3));
    let minPair = Math.min.apply(null,tmp.slice(3));
    res = Math.min(minOdd,Math.floor(minPair/2));
    return res;
};
