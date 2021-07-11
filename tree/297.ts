/**
 * question: 297. 二叉树的序列化与反序列化
 * address: https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 */

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
    let string = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();

        if (node === null) {
            string.push('#');
        }

        queue.push(node.left, node.right);
        string.push(node.val);
    }

    return string.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    let string = data.split(',');
    const root = new TreeNode(Number(string[0]));
    const queue = [root];
    let i = 1;

    while (i < string.length) {
        const node = queue.shift();

        const left = string[i++];
        const right = string[i++]

        if (left !== '#') {
            const leftNode = new TreeNode(Number(left));
            queue.push(leftNode);
            node.left = leftNode;
        }

        if (right !== '#') {
            const rightNode = new TreeNode(Number(right));
            queue.push(rightNode);
            node.right = rightNode;
        }
    }

    return root;
}
