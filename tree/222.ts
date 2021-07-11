/**
 * question: 222. 完全二叉树的节点个数
 * address: https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */

export function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let left = root;
    let right = root;
    let l = 0;
    let r = 0;

    while (left) {
        left = left.left;
        l++;
    }

    while (right) {
        right = right.right;
        r++;
    }

    if (l === r) {
        return Math.pow(2, l) - 1;
    }

    return countNodes(root.left) + countNodes(root.right) + 1;
}
