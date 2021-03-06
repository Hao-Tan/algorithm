/**
 * question: 700. 二叉搜索树中的搜索
 * address: https://leetcode-cn.com/problems/search-in-a-binary-search-tree/
 */

export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null || root.val === val) {
        return root;
    }
    if (root.val < val) {
        return searchBST(root.right, val);
    }

    if (root.val > val) {
        return searchBST(root.left, val);
    }
};