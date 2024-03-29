/**
 * question: 416. 分割等和子集
 * address: https://leetcode-cn.com/problems/partition-equal-subset-sum/
 */
export function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2) {
        return false;
    }

    const n1 = nums.length;
    const n2 = sum / 2;

    const dp = new Array(n2 + 1).fill(false);

    dp[0] = true;

    for (let i = 0; i < n1; i++) {
        for (let j = n2; j >= 1; j--) {
            dp[j] = dp[j] || dp[j - nums[i]] || false;
        }
    }

    return dp[n2];
}
