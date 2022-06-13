/**
 * question: 剑指 Offer 07. 重建二叉树
 * address: https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof/
 */

export function buildTree(
    preorder: number[],
    inorder: number[]
): TreeNode | null {
    if (!preorder.length || !inorder.length) {
        return null;
    }
    const root = new TreeNode(preorder[0]);
    const rootIndex = inorder.indexOf(preorder[0]);
    root.left = buildTree(
        preorder.slice(1, 1 + rootIndex),
        inorder.slice(0, rootIndex)
    );
    root.right = buildTree(
        preorder.slice(rootIndex + 1),
        inorder.slice(rootIndex + 1)
    );

    return root;
}
