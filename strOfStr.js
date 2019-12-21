/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack == null) return -1;
    if(needle==null || needle=='') return 0;
    if(haystack.length < needle.length) return -1;
    return haystack.indexOf(needle);
};
