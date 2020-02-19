/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let gradient = (coordinates[1][1] - coordinates[0][1]) / 
                    (coordinates[1][0] - coordinates[0][0]);
    for(let i = 1; i < coordinates.length - 1; i++){
        let tmp = (coordinates[i+1][1] - coordinates[i][1]) / 
                    (coordinates[i+1][0] - coordinates[i][0]);
        if(gradient != tmp) return false;
    }
    return true;
};
