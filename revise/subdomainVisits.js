/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    let res = [];
    for(let i = 0; i < cpdomains.length; i++){
        let arr = cpdomains[i].split(' ');
        let num = parseInt(arr[0]);
        let domain = arr[1].split('.');
        for(let j = domain.length - 1; j >= 0; j--){
            let tmp = domain.slice(j).join('.');
            map.set(tmp,map.has(tmp)?map.get(tmp)+num:num);
        }
    }
    for(let [key,value] of map){
        let tmp = "" + value + " " + key;
        res.push(tmp);
    }

    return res;

};
