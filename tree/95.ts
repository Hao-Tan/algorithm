/**
 * question: 95. 不同的二叉搜索树 II
 * address: https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 */
export function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) {
        return [null];
    }

    function buildTree(begin: number, end: number) {
        if (begin > end) {
            return [null];
        }

        const res = [];
        for (let mid = begin; mid <= end; mid++) {
            const left = buildTree(begin, mid - 1);
            const right = buildTree(mid + 1, end);

            for (let i = 0; i < left.length; i++) {
                for (let j = 0; j < right.length; j++) {
                    const root = new TreeNode(mid);
                    root.left = left[i];
                    root.right = right[j];
                    res.push(root);
                }
            }
        }

        return res;
    }

    return buildTree(1, n);
}
