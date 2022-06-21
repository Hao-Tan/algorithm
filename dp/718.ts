/**
 * question: 718. 最长重复子数组
 * address: https://leetcode.cn/problems/maximum-length-of-repeated-subarray/
 */

export function findLength(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;

    const dp = new Array(m).map(() => new Array(n).fill(0));
    let max = 0;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i] === nums2[j]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                max = Math.max(dp[i][j], max);
            } else {
                dp[i][j] = 0;
            }
        }
    }

    return max;
}
