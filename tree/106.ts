/**
 * question: 106. 从中序与后序遍历序列构造二叉树
 * address: https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 */

export function buildTree(
    inorder: number[],
    postOrder: number[]
): TreeNode | null {
    return build(
        inorder,
        0,
        inorder.length - 1,
        postOrder,
        0,
        postOrder.length - 1
    );
}

export function build(
    inorder: number[],
    inStart: number,
    inEnd: number,
    postOrder: number[],
    postStart: number,
    postEnd: number
) {
    if (postStart > postEnd) {
        return null;
    }

    const rootVal = postOrder[postEnd];
    const root = new TreeNode(rootVal);

    // 根节点在中序遍历中的位置
    const index = inorder.indexOf(rootVal);
    const leftSize = index - inStart;

    root.left = build(
        inorder,
        inStart,
        index - 1,
        postOrder,
        postStart,
        postStart + leftSize - 1
    );
    root.right = build(
        inorder,
        index + 1,
        inEnd,
        postOrder,
        postStart + leftSize,
        postEnd - 1
    );

    return root;
}
