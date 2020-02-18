/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    //case 1: length == 0 or length A != length B, return false
    if(A.length == 0 || B.length == 0 || A.length != B.length) return false;

    //case 2: A == B, verify A and B have duplicate element
    //if have, return true
    if(A == B){
        let map = new Map();
        for(let i = 0; i < A.length; i++){
            map.set(A[i],map.has(A[i])?map.get(A[i])+1:1);
        }
        for(let [key,value] of map){
            if(value > 1) return true;
        }
        return false;
    }

    //case 3: A != B: verify two different elements
    //record different position and its alphabet
    let difA = [];
    let difB = [];
    for(let i = 0; i < A.length; i++){
        if(A.charAt(i) != B.charAt(i)){
            difA.push(A.charAt(i));
            difB.push(B.charAt(i));
        }
    }
    if(difA.length != 2) return false;
    if(difA[0] != difB[1] || difA[1] != difB[0]) return false;
    return true;
};
