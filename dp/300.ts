/**
 * question: 300. 最长递增子序列
 * address: https://leetcode-cn.com/problems/longest-increasing-subsequence/
 */
export function lengthOfLIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] < dp[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

export function lengthOfLIS2(nums: number[]): number {
    const piles = [];

    for (let i = 0; i < nums.length; i++) {
        const target = nums[i];
        let left = 0;
        let right = piles.length;

        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (piles[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (left === piles.length) {
            piles[left] = target;
        }
    }

    return piles.length;
}
