/**
 * question: 236. 二叉树的最近公共祖先
 * address: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 */

export function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root === null) {
        return null;
    }

    if (root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p ,q);

    if (left && right) {
        return root;
    }

    if (left || right) {
        return left ? left : right;
    }

    if (!left && !right) {
        return null;
    }
}
