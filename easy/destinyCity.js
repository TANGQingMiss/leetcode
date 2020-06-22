/**
 * @param {string[][]} paths
 * @return {string}
 */
// 给你一份旅游线路图，该线路图中的旅行线路用数组 paths 表示，其中 paths[i] = [cityAi, cityBi] 表示该线路将会从 cityAi 直接前往 cityBi 。请你找出这次旅行的终点站，即没有任何可以通往其他城市的线路的城市。
// 题目数据保证线路图会形成一条不存在循环的线路，因此只会有一个旅行终点站
var destCity = function(paths) {
    if(paths == null || paths.length == 0) return "";
    if(paths.length == 1) return paths[0][1];
    let begin = [];
    let end = [];
    for(let i = 0; i < paths.length; i++){
        begin.push(paths[i][0]);
        end.push(paths[i][1]);
    }
    for(let i = 0; i < end.length; i++){
        let item = end[i];
        if(begin.indexOf(item) == -1){
            return item;
        }
    }
};
