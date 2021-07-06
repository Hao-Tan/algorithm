/**
 * question: 450. 删除二叉搜索树中的节点
 * address: https://leetcode-cn.com/problems/delete-node-in-a-bst/
 */

export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
        return root;
    }

    if (root.val === key) {
        if (root.left === null) {
            return root.right;
        }
        if (root.right === null) {
            return root.left;
        }

        const max = getMax(root.left);
        root.val = max.val;
        root.left = deleteNode(root.left, root.val);
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    if (key > root.val) {
        root.right = deleteNode(root.right, key)
    }

    return root;
};

export function getMax(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }
    let max = root;
    while(max.right) {
        max = max.right
    }

    return max;
}
