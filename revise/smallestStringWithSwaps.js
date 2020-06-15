/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
// 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
// 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
// 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串

var smallestStringWithSwaps = function(s, pairs) {
// 此题是典型的并查集，当pairs中元素存在连通性，则表示联通区间子串可以
// ASCII升序排序；多个联通子集，则分别升序求最小一组.注意测试超时问题
const union=[];
const len=s.length;
for(let i=0;i<len;i++) union[i]=i;

for(const pair of pairs){
    merge(pair[0],pair[1])
}

// 哈希表保存同一组互换的索引
const idxMap=new Map();
for(let i=0;i<len;i++){
    const t=idxMap.get(find(i))||[];
    t.push(i);
    idxMap.set(find(i),t)
}

// 局部排序
const res=[];
for(const ids of idxMap.values()){
    const t=ids.map(id=>s[id])
    t.sort()
    let i=0
    for(const id of ids){
        res[id]= t[i++]
    }
}

return res.join('');

// 可能存在环路，因此需要中断环路
function find(x){
    return x===union[x]?x:(union[x]=find(union[x]))
}

function merge(x,y){
    union[find(x)]=find(y)
}
};
