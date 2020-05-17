/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
//你有一个带有四个圆形拨轮的转盘锁。每个拨轮都有10个数字： '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' 。每个拨轮可以自由旋转：例如把 '9' 变为  '0'，'0' 变为 '9' 。每次旋转都只能旋转一个拨轮的一位数字。
//锁的初始数字为 '0000' ，一个代表四个拨轮的数字的字符串。
//列表 deadends 包含了一组死亡数字，一旦拨轮的数字和列表里的任何一个元素相同，这个锁将会被永久锁定，无法再被旋转
var openLock = function(deadends, target) {
    if(target==null || target=="0000") return -1
    let start="0000"
    if(deadends.includes(target)||deadends.includes(start)) return -1
    let queue=[]
    let visited=new Set(deadends)
    let step=0
    queue.push(start)
    visited.add(start)
    while(queue.length>0){
        for(let i=queue.length; i>0; i--){
            let cur=queue.shift();
            if(target===cur){ // 找到了目标返回步骤数
                return step;
            }
            // console.log(queue)
            let nexts=getNexts(cur);
            for(let str of nexts){
                if(!deadends.includes(str) && !visited.has(str)){
                   visited.add(str)
                    queue.push(str);
                }
            }
        }
        step++;
    }  
    return -1  
};

function getNexts(cur){
    let list=[];
    for(let i=0; i<4; i++){
        let curArr=cur.split('');
        let modChar=Number(cur.charAt(i));
        curArr[i]=modChar=='0'?'9':(modChar-1)
        list.push(curArr.join(''));
        curArr[i]=modChar=='9'?'0':(modChar+1);
        list.push(curArr.join(''));
    }
    return list;
}
