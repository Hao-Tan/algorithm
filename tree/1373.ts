/**
 * question: 1373. 二叉搜索子树的最大键值和
 * address: https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree/
 */

export function maxSumBST(root: TreeNode | null): number {
    let sum = 0;

    function traverse(root: TreeNode | null): number[] {
        if (root === null) {
            return [1, Infinity, -Infinity, 0];
        }

        const left = traverse(root.left);
        const right = traverse(root.right);

        const res = [];
        if (left[0] === 1 && right[0] === 1 && root.val > left[2] && root.val < right[1]) {
            res[0] = 1;
            res[1] = Math.min(right[1], root.val);
            res[2] = Math.max(left[2], root.val);
            res[3] = left[3] + right[3] + root.val;

            sum = Math.max(sum, res[3]);
        } else {
            res[0] = 0;
        }

        return res;
    }

    traverse(root);
    return sum;
}
