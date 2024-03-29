/**
 * question: 518. 零钱兑换 II
 * address: https://leetcode-cn.com/problems/coin-change-2/
 */
export function change(amount: number, coins: number[]): number {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}
