/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
//设计一个算法来序列化和反序列化二叉搜索树。 对序列化/反序列化算法的工作方式没有限制。 您只需确保二叉搜索树可以序列化为字符串，并且可以将该字符串反序列化为最初的二叉搜索树
var serialize = function(root) {
    if (!root) return []
    let stack = [root]
    let res = []
    while (stack.length) {
        let len = stack.length
        while (len--) {
            let node = stack.shift()
            res.push(node !== null ? node.val : node)
            if (node !== null) {
                stack.push(node.left)
                stack.push(node.right)
            }
        }
    }
    while (res[res.length - 1] === 0) res.pop()
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return null
    let nodes = data.map(value => {
        return new TreeNode(value)
    })
    let index = 0
    let temp = [nodes[index++]]
    for (let i = 0; i < nodes.length; i++) {
        let left = nodes[index++]
        let right = nodes[index++]
        if (left && left.val !== null) {
            temp[i].left = left
            temp.push(left)
        }
        if (right && right.val !== null) {
            temp[i].right = right
            temp.push(right)
        }
    }
    return nodes[0]
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
