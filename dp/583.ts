/**
 * question: 583. 两个字符串的删除操作
 * address: https://leetcode-cn.com/problems/delete-operation-for-two-strings/
 */
export function minDistance(word1: string, word2: string): number {
    const n1 = word1.length;
    const n2 = word2.length;
    const dp = Array.from(new Array(n1 + 1), () => new Array(n2 + 1).fill(0));

    for (let i = 0; i <= n1; i++) {
        for (let j = 0; j <= n2; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = Math.max(i, j);
                continue;
            }
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[n1][n2];
}
