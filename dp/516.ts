/**
 * question: 516. 最长回文子序列
 * address: https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 */
export function longestPalindromeSubseq(s: string): number {
    const len = s.length;
    const dp = new Array(len).fill(new Array(len).fill(0));

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(
                    dp[i + 1][j],
                    dp[i][j - 1]
                );
            }
        }
    }

    return dp[0][len - 1];
}
