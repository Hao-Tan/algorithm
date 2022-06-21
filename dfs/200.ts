/**
 * question: 200. 岛屿数量
 * address: https://leetcode.cn/problems/number-of-islands/
 */

export function numIslands(grid: string[][]): number {
    const dfs = (x: number, y: number, grid: string[][]) => {
        if (
            x < 0 ||
            y < 0 ||
            x >= grid.length ||
            y >= grid[0].length ||
            grid[x][y] === '0' 
        ) {
            return;
        }

        grid[x][y] = '0';
        dfs(x - 1, y, grid);
        dfs(x + 1, y, grid);
        dfs(x, y - 1, grid);
        dfs(x, y + 1, grid);
    };

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j, grid);
                count++;
            }
        }
    }

    return count;
}
