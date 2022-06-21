/**
 * question: 429. N 叉树的层序遍历
 * address: https://leetcode.cn/problems/n-ary-tree-level-order-traversal/
 */

export function levelOrder(root: Node | null): number[][] {
    const res: number[][] = [];
    if (!root) {
        return res;
    }
    const queue = [root];
    while(queue.length) {
        const size = queue.length;
        const temp = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            temp.push(node.val);
            for (const subNode of node.children) {
                queue.push(subNode);
            }
        }
        res.push(temp);
    }

    return res;
};
