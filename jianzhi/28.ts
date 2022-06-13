/**
 * question: 剑指 Offer 28. 对称的二叉树
 * address: https://leetcode.cn/problems/dui-cheng-de-er-cha-shu-lcof/
 */

export function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }

    const check = (left: TreeNode | null, right: TreeNode | null) => {
        if (!left && !right) {
            return true;
        }
        if (!left || !right) {
            return false;
        }
        return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
    };

    return check(root.left, root.right);
}
