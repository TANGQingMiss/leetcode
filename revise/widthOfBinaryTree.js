//给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空
var widthOfBinaryTree = function(root) {

    if (!root) return 0;

    var res = [], maxWidth = 1;
    recursion(root, 0, 0);
    return maxWidth;

    function recursion(root, level, num){

        if (res[level]){
            res[level].push(num);
        }
        else{
            res[level] = [num];
        }

        //计算最大宽度
        var tempArr = res[level];
        var tempWidth = tempArr[tempArr.length - 1] - tempArr[0] + 1;
        if (tempWidth > maxWidth) {
            maxWidth = tempWidth;
        }

        if (root.left){
            recursion(root.left, level + 1, num * 2 + 1);
        }
        if (root.right){
            recursion(root.right, level + 1, num * 2 + 2);
        }
    }
};
