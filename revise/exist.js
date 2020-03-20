/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board.length == 0 || word.length == 0) return false;
    let row = board.length;
    let col = board[0].length;
    let flow = new Array(row);
    for(let i = 0; i < row; i++){
        flow[i] = new Array(col);
        flow[i].fill(0);
    }
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(dfs(board,word,0,i,j,flow)){
                return true;
            }
        }
    }
    return false;

    function dfs(board,word,length,i,j,flow){
        if(length == word.length) return true;
        if(i < 0 || i >= row || j < 0 || j > col || board[i][j] != word[length]){
            return false;
        }
        if(flow[i][j] == 0){
            flow[i][j] = 1;
            if(dfs(board,word,length+1,i+1,j,flow)
            || dfs(board,word,length+1,i-1,j,flow)
            || dfs(board,word,length+1,i,j+1,flow)
            || dfs(board,word,length+1,i,j-1,flow)){
                return true;
            }
            flow[i][j] = 0;
        }
        return false;
    }

};
