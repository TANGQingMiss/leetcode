/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    if(rooms.length <= 1) return true;
    let keys = []; // store all keys that could be obtained
    let res = [0];
    for(let i = 0; i < rooms[0].length; i++){
        keys.push(rooms[0][i]);
    }
    while(keys.length > 0){
        let len = keys.length;
        while(len > 0){
            let tmp = keys.shift();
            if(res.indexOf(tmp) == -1){
                res.push(tmp);
                for(let i = 0; i < rooms[tmp].length; i++){
                    keys.push(rooms[tmp][i]);
                }
            }
            len--;
        }
    }
    return res.length == rooms.length;
}
