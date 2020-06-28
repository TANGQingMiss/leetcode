/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
//现在给定3个参数 — start, end, bank，分别代表起始基因序列，目标基因序列及基因库，请找出能够使起始基因序列变化为目标基因序列所需的最少变化次数。如果无法实现目标变化，请返回 -1
var minMutation = function(start, end, bank) {
    let bankSet = new Set(bank);
    if (!bankSet.has(end)) return -1;
    let queue = [[start, 0]];
    let dna = ["A", "C", "G", "T"];
    while (queue.length) {
        let [node, count] = queue.shift();
        if (node === end) return count;
        for (let i = 0; i < node.length; i++) {
            for (let j = 0; j < dna.length; j++) {
                let d = node.slice(0, i) + dna[j] + node.slice(i + 1);
                if (bankSet.has(d)) {
                    queue.push([d, count + 1]);
                    bankSet.delete(d);
                }
            }
        }
    }
    return -1;
};
