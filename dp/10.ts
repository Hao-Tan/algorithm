/**
 * question: 10. 正则表达式匹配
 * address: https://leetcode-cn.com/problems/regular-expression-matching/
 */
export function isMatch(s: string, p: string): boolean {
    const m = s.length;
    const n = p.length;
    const dp: Array<Array<boolean>> = Array.from(new Array(m + 1), () =>
        new Array(n + 1).fill(false)
    );
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (match(s, p, i, j)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                if (p[j - 1] === '*') {
                    dp[i][j] = dp[i][j - 2];
                    if (match(s, p, i, j - 1)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                }
            }
        }
    }

    return dp[m][n];
}

export function match(s: string, p: string, i: number, j: number) {
    if (i === 0) {
        return false;
    }

    if (p[j - 1] === '.') {
        return true;
    }

    return s[i - 1] === p[j - 1];
}
