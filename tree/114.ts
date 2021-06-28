/**
 * question: 114. 二叉树展开为链表
 * address: https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 */

export function flatten(root: TreeNode | null): void {
    if (!root) {
        return;
    }

    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;

    root.left = null;
    root.right = left;

    while(left && left.right) {
        left = left.right;
    }

    left.right = right;
};
