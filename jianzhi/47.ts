/**
 * question: 剑指 Offer 47. 礼物的最大价值
 * address: https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof/
 */

export function maxValue(grid: number[][]): number {
    const m = grid[0].length;
    const n = grid.length;

    for (let j = 0; j < m; j++) {
        for (let i = 0; i < n; i++) {
            if (i === 0 && j === 0) {
                continue;
            } else if (i === 0) {
                grid[i][j] += grid[i][j - 1];
            } else if (j === 0) {
                grid[i][j] += grid[i - 1][j];
            } else {
                grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1]);
            }
        }
    }

    return grid[n - 1][m - 1];
}
