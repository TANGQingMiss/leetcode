/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let list = new Array(n);
    for(let i = 0; i < n; i++){
        list[i] = new Array(m);
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            list[i][j] = 0;
        }
    }

    for(let i = 0; i < indices.length; i++){
        let row = indices[i][0];
        let col = indices[i][1];
        for(let i = 0; i < m; i++){
            list[row][i] += 1;
        }
        for(let j = 0; j < n; j++){
            list[j][col] += 1;
        }
    }
    let res = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(list[i][j] % 2 == 1) res++;
        }
    }
    return res;
};
