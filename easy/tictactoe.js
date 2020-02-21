/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let len = moves.length;
    //while len <= 4, A and B both takes <= 2 steps, Pending
    if(len <= 4) return "Pending";
    let chess = [[0,0,0],[0,0,0],[0,0,0]];

    //while len is even, A and B takes the same number steps
    if(len % 2 == 0){
        for(let i = 0; i < len - 1; i += 2){
            chess[moves[i][0]][moves[i][1]] = 1;
            chess[moves[i+1][0]][moves[i+1][1]] = 4;
        }
    }else{
        //else A takes one more step
        for(let i = 0; i < len - 2; i += 2){
            chess[moves[i][0]][moves[i][1]] = 1;
            chess[moves[i+1][0]][moves[i+1][1]] = 4;
        }
        chess[moves[len-1][0]][moves[len-1][1]] = 1;
    }

    //case 1: A or B wins
    let case1 = chess[0][0] + chess[0][1] + chess[0][2];
    let case2 = chess[0][0] + chess[1][0] + chess[2][0];
    let case3 = chess[2][0] + chess[2][1] + chess[2][2];
    let case4 = chess[0][2] + chess[1][2] + chess[2][2];
    let case5 = chess[0][0] + chess[1][1] + chess[2][2];
    let case6 = chess[0][2] + chess[1][1] + chess[2][0];
    let case7 = chess[0][1] + chess[1][1] + chess[2][1];
    let case8 = chess[1][0] + chess[1][1] + chess[1][2];
    let score = [case1,case2,case3,case4,case5,case6,case7,case8];
    //A wins: score = 3, B wins: score = 12
    if(score.indexOf(3) != -1 && score.indexOf(12) != -1) return "Draw";
    else if(score.indexOf(3) != -1 && score.indexOf(12) == -1) return "A";
    else if(score.indexOf(3) == -1 && score.indexOf(12) != -1) return "B";
    else if(score.indexOf(3) == -1 && score.indexOf(12) == -1 && len == 9) 
    return "Draw";
    else if(len < 9) return "Pending";

    
};
