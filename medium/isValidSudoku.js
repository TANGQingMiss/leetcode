/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < 9; i++){
        let tmpRow = new Array();
        let tmpCol = new Array();
        for(let j = 0; j < 9; j++){
            if(board[i][j] != "."){
                if(tmpRow.indexOf(board[i][j]) != -1){
                    return false;
                }else{tmpRow.push(board[i][j]);}
            }
            if(board[j][i] != "."){
                if(tmpCol.indexOf(board[j][i]) != -1){
                    return false;
                }else{tmpCol.push(board[j][i]);}
            }
        }
    }

    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(i % 3 == 0 && j % 3 == 0){
                let tmp = new Array();
                for(let k = i; k < i + 3; k++){
                    for(let l = j; l < j + 3; l++){
                        if(board[k][l] != "."){
                            if(tmp.indexOf(board[k][l]) != -1){
                                return false;
                            }else{
                                tmp.push(board[k][l]);
                            }
                        }
                    }
                }
            }
        }
    }
    return true;
};
