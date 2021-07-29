/**
 * question: 322. 零钱兑换
 * address: https://leetcode-cn.com/problems/coin-change/
 */
export function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(amount + 1);

    dp[0] = 0;

    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (coin > i) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}
