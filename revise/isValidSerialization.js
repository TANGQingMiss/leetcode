/**
 * @param {string} preorder
 * @return {boolean}
 */
//序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #
var isValidSerialization = function(preorder) {
    let n = preorder.length;
    let num = 0;
    for(let i = n - 1; i >= 0; i--){
        if(preorder[i] == ',') continue;
        if(preorder[i] == '#') num++;
        else{
            while(i >= 0 && preorder[i] != ','){
                i--;
            }
            if(num >= 2) num--;
            else return false;
        }
    }
    if(num != 1) return false;
    return true;
};
