/**
 * question: 96. 不同的二叉搜索树
 * address: https://leetcode-cn.com/problems/unique-binary-search-trees/
 */

const map = new Map();
export function numTrees(n: number): number {
    if (n === 0) {
        map.set(0, 1);
        return 1;
    }
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        const left = map.get(i) || numTrees(i);
        const right = map.get(n - i - 1) || numTrees(n - i - 1);
        sum += left * right;
    }

    map.set(n, sum);
    return sum;
}
