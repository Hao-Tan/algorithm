/**
 * question: 剑指 Offer 26. 树的子结构
 * address: https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/
 */

export function isSubStructure(
    A: TreeNode | null,
    B: TreeNode | null
): boolean {
    const check = (A: TreeNode | null, B: TreeNode | null) => {
        if (!B) return true;
        if (!A || A.val !== B.val) return false;
        return check(A.left, B.left) && check(A.right, B.right);
    };

    if (!A || !B) {
        return false;
    }

    return (
        check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
    );
}
