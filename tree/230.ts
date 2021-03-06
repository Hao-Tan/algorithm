/**
 * question: 230. 二叉搜索树中第K小的元素
 * address: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

let index: number;
let res: number;
export function kthSmallest(root: TreeNode | null, k: number): number {
    index = 0;
    res = null;
    traverse(root, k);
    return res;
}

export function traverse(root: TreeNode, k: number) {
    if (root === null) {
        return;
    }

    traverse(root.left, k);
    index++;
    if (index === k) {
        res = root.val;
        return;
    }
    traverse(root.right, k);
}
