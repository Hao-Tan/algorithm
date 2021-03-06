/**
 * question: 654.最大二叉树（中等）
 * address: https://leetcode-cn.com/problems/maximum-binary-tree/
 */

export function constructMaximumBinaryTree(nums: Array<number>) {
    if (!nums.length) {
        return null;
    }

    const max_i = max(nums);
    const root = new TreeNode(nums[max_i]);
    root.left = constructMaximumBinaryTree(nums.slice(0, max_i));
    root.right = constructMaximumBinaryTree(nums.slice(max_i + 1));
    return root;
}

export function max(nums: Array<number>) {
    let maxNum = nums[0];
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (element > maxNum) {
            maxNum = element;
            index = i
        }
    }

    return index;
}
