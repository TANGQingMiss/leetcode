/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board == null || board.length == 0) return;
    let row = board.length;
    let col = board[0].length;

    //find each adjacent 0 with border and change it to '-'
    function dfs(board,i,j){
        if(i < 0 || j < 0 || i >= row || j >= col || board[i][j] != 'O'){
            return;
        }
        board[i][j] = '-';
        dfs(board,i-1,j);
        dfs(board,i+1,j);
        dfs(board,i,j-1);
        dfs(board,i,j+1);
    }

    for(let i = 0; i < row; i++){
        dfs(board,i,0);
        dfs(board,i,col-1);
    }
    for(let j = 0; j < col; j++){
        dfs(board,0,j);
        dfs(board,row-1,j);
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] == 'O') board[i][j] = 'X';//still o - surounded
            else if(board[i][j] == '-') board[i][j] = 'O';//'-' change to O
        }
    }
    return;
};
