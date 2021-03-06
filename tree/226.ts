/**
 * question: 226. 翻转二叉树
 * address: https://leetcode-cn.com/problems/invert-binary-tree/
 */

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }

    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
}
