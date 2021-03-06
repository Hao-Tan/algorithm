/**
 * question: 701. 二叉搜索树中的插入操作
 * address: https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/
 */

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val)
    }
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val)
    }

    return root;
};
