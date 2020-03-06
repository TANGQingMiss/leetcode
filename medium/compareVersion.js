/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let a1 = version1.split('.');
    let a2 = version2.split('.');
    for(let n = 0; n < Math.max(a1.length,a2.length); n++){
        let i = (n < a1.length ? parseInt(a1[n]) : 0);
        let j = (n < a2.length ? parseInt(a2[n]) : 0);
        if(i < j) return -1;
        else if(i > j) return 1;
    }
    return 0;
};
