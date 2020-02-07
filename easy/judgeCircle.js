/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if(!moves) return true;
    //use map to store L,R,U,D 
    let map = new Map();
    for(let i = 0; i < moves.length; i++){
        map.set(moves.charAt(i),map.has(moves.charAt(i))?map.get(moves.charAt(i))+1:1);
    }
    if(map.get('U') == map.get('D') && map.get('L') == map.get('R')){
        return true;
    }
    return false;
};
