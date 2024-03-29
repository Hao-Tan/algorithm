/**
 * question: 712. 两个字符串的最小ASCII删除和
 * address: https://leetcode-cn.com/problems/minimum-ascii-delete-sum-for-two-strings/
 */
export function minimumDeleteSum(s1: string, s2: string): number {
    const n1 = s1.length;
    const n2 = s2.length;
    const dp = Array.from(new Array(n1 + 1), () => new Array(n2 + 1).fill(0));

    for (let i = 0; i <= n1; i++) {
        for (let j = 0; j <= n2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] + s2.charCodeAt(j - 1);
                continue;
            }
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + s1.charCodeAt(i - 1);
                continue;
            }
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1.charCodeAt(i - 1),
                    dp[i][j - 1] + s2.charCodeAt(j - 1)
                );
            }
        }
    }

    return dp[n1][n2];
}
