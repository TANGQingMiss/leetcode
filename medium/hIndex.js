/**
 * @param {number[]} citations
 * @return {number}
 */
//h definition: at least h articles haved been cited at least h times
var hIndex = function(citations) {
    if(citations.length == 0 || citations == null) return 0;
    citations = citations.sort(function(x,y){return x - y;});
    for(let i = 0; i < citations.length; i++){
        let h = citations.length - i;
        if(h <= citations[i]) return h;
    }
    return 0;
};
