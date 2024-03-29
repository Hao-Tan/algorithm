/**
 * question: 174. 地下城游戏
 * address: https://leetcode-cn.com/problems/dungeon-game/
 */
export function calculateMinimumHP(dungeon: number[][]): number {
    const m = dungeon.length;
    const n = dungeon[0].length;
    const dp = Array.from(new Array(m+1), () => new Array(n+1).fill(Infinity));
    dp[m-1][n] = dp[m][n-1] = 1;

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const next = Math.min(dp[i + 1][j], dp[i][j + 1]);
            dp[i][j] = Math.max(next - dungeon[i][j], 1)
        }
    }

    return dp[0][0];
}
