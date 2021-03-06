/**
 * question: 105. 从前序与中序遍历序列构造二叉树
 * address: https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 */

export function buildTree(
    preorder: number[],
    inorder: number[]
): TreeNode | null {
    return build(
        preorder,
        0,
        preorder.length - 1,
        inorder,
        0,
        inorder.length - 1
    );
}

export function build(
    preorder: number[],
    preStart: number,
    preEnd: number,
    inorder: number[],
    inStart: number,
    inEnd: number
) {
    if(preStart > preEnd) {
        return null;
    }

    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);

    // 根节点在中序遍历中的位置
    const index = inorder.indexOf(rootVal);
    const leftSize = index - inStart;

    root.left = build(
        preorder,
        preStart + 1,
        preStart + leftSize,
        inorder,
        inStart,
        index - 1
    );
    root.right = build(
        preorder,
        preStart + leftSize + 1,
        preEnd,
        inorder,
        index + 1,
        inEnd
    );

    return root;
}
