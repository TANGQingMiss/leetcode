/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    return [...paragraph
        .toLowerCase() // change to lower case
        .match(/[a-z]+/g) //match only a-z
        .reduce((map,item) => {
            map.set(item, (map.get(item) || 0) + 1);
            return map;
        }, new Map())] // store word and appearing times in map
        .filter(wordCount => !banned.includes(wordCount[0])) //filter banned word
        .sort((x,y) => x[1] - y[1])
        .pop()[0]
};
