/**
 * question: 538. 把二叉搜索树转换为累加树
 * address: https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 */

let val = 0;
export function convertBST(root: TreeNode | null): TreeNode | null {
    traverse(root);
    return root;
};

export function traverse(root: TreeNode) {
    if (root === null) {
        return;
    }

    traverse(root.right);
    val += root.val;
    root.val = val;
    traverse(root.left);
}
