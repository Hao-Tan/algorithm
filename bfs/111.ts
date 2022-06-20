/**
 * question: 111. 二叉树的最小深度
 * address: https://leetcode.cn/problems/minimum-depth-of-binary-tree/
 */
function minDepth(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null) => {
        if (!root) {
            return 0;
        }
        const left = dfs(root.left);
        const right = dfs(root.right);
        if (left === 0 || right === 0) {
            return left + right + 1;
        }
        return 1 + Math.min(left, right);
    };

    const bfs = (root: TreeNode | null) => {
        if (!root) {
            return 0;
        }
        const queue = [root];
        let depth = 1;
        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (!node.left && !node.right) {
                    return depth;
                }
                if (node.left) {
                    queue.push(node.left);
                }

                if (node.right) {
                    queue.push(node.right);
                }
            }
            depth++;
        }
        return depth;
    };

    return bfs(root);
}
