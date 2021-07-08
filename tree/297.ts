/**
 * question: 297. 二叉树的序列化与反序列化
 * address: https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
 */

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
    let string = [];
    function traverse(root: TreeNode | null) {
        if (root === null) {
            string.push('#');
            return;
        }

        traverse(root.left);
        traverse(root.right);

        string.push(root.val);
    }

    traverse(root);

    return string.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    let string = data.split(',');
    function traverse(string: string[]) {
        const val = string.pop();

        if (val === '#') {
            return null;
        }

        const node = new TreeNode(Number(val));

        node.right = traverse(string);
        node.left = traverse(string);

        return node;
    }

    return traverse(string);
}
