/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    let area1 = (C-A)*(D-B);
    let area2 = (G-E)*(H-F);
    if(C <= E || G <= A || H <= B || D <= F){
        return area1 + area2;
    }
    let topX = Math.min(G,C);
    let topY = Math.min(H,D);
    let bottomX = Math.max(E,A);
    let bottomY = Math.max(B,F);
    return area1 - (topX - bottomX) * (topY - bottomY) + area2;
};
