/**
 * question: 剑指 Offer 27. 二叉树的镜像
 * address: https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/
 */

export function mirrorTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return root;
    }

    const left = mirrorTree(root.right);
    const right = mirrorTree(root.left);
    root.left = left;
    root.right = right;

    return root;
}
