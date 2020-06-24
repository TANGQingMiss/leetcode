/**
 * @param {number[][]} A
 * @return {number}
 */
// 在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）
// 现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛
// 一次深度+一次广度，第一次将两岛标记出来，第二次从岛1广度遍历每个点的邻居是否为岛2，是则返回，否则标记该点为岛1，继续遍历
var shortestBridge = function(A) {
    let R = A.length, C = A[0].length;
    let covers = find_boundary(A);
    //计算距离
    //把所有岛1点插入队列
    let queue  = [];
    for(let y = 0 ; y < R; y ++) {
        for(let x = 0; x < C; x ++) {
            if(covers[y][x] == 1){
                queue.push({pos: y * R + x, depth: 0});
            } else {
                continue;
            }
        }
    }

    //广度遍历队列
    while(queue.length) {
        let {pos, depth} = queue.shift();
        let nb = neighbors(A, pos % C, Math.floor(pos / R));
        for(let w of nb) {
            let _y = Math.floor(w / R), _x = w % C;
            if(2 == covers[_y][_x]) {
                //邻居是岛2
                return depth;
            } else if( 0 == covers[_y][_x]){
                //是个空点，设置标记
                covers[_y][_x] = 1;
                queue.push({pos: w, depth: depth + 1}) 
            }
        }
    }
    return 0;
    
};

//计算每个点的邻居
const neighbors = function(A, x, y) {
    let R = A.length;
    let C = A[0].length;
    if(x <0 || y < 0 || x >= C || y >= R) return[];
    let arr = [];
    
    if(x >0 ) arr.push(y * R + x -1);
    if(x < C - 1) arr.push(y * R + x +1)
    if(y > 0) arr.push((y - 1) * R + x)
    if(y < R - 1) arr.push((y + 1) * R + x);

    return arr;
}

//寻找n个岛
const find_boundary = function(A) {
    let R = A.length, C = A[0].length;
    let covers = [];
    for(let y = 0 ; y < R; y ++) {
        covers[y] = [];
        for(let x = 0; x < C; x ++) {
            covers[y][x] = 0;
        }
    }
    let no = 0;
    for(let y = 0 ; y < R; y ++) {
        for(let x = 0; x < C; x ++) {
            if(!covers[y][x] && A[y][x] == 1){
                 ++ no;
                 covers[y][x] = no;
                let stack  = [];
                stack.push(y * R + x);
               
                while(stack.length) {
                    let pos = stack.pop();
                    let nb = neighbors(A, pos % C, Math.floor(pos / R));
                    // console.log('nb', nb, pos % C , Math.floor(pos / R));
                    for(let w of nb) {
                        let _y = Math.floor(w / R), _x = w % C;
                        if(!covers[_y][_x] && A[_y][_x] == 1) {
                            covers[_y][_x] = no
                            stack.push(_y * R + _x);
                        } 
                    }
                }
            } else {
                continue;
            }
        }
    }
    return covers;
};
