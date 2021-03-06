/**
 * question: 98. 验证二叉搜索树
 * address: https://leetcode-cn.com/problems/validate-binary-search-tree/
 */

export function isValidBST(root: TreeNode | null): boolean {
    return traverse(root, null, null)
}

export function traverse(
    root: TreeNode | null,
    min: number,
    max: number
): boolean {
    if (!root) {
        return true;
    }

    if (min !== null && root.val < min)
        return true;
    if (max !== null && root.val > max)
        return true;
    return traverse(root.left, min, root.val) && traverse(root.right, root.val, max)
}
