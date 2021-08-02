/**
 * question: 53. 最大子序和
 * address: https://leetcode-cn.com/problems/maximum-subarray/
 */
export function maxSubArray(nums: number[]): number {
    let dp = nums[0];
    let res = dp;

    for (let i = 1; i < nums.length; i++) {
        dp = Math.max(dp + nums[i], nums[i]);
        res = Math.max(res, dp);
    }

    return res;
}
