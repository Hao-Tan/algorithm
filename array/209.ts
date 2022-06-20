/**
 * question: 209. 长度最小的子数组
 * address: https://leetcode.cn/problems/minimum-size-subarray-sum/
 */

export function minSubArrayLen(target: number, nums: number[]): number {
    let count = nums.length + 1;
    let currentSum = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        currentSum += nums[right];
        right++;

        while (currentSum >= target) {
            currentSum -= nums[left];
            count = Math.min(right - left + 1, count);
            left++;
        }
    }

    return count > nums.length ? 0 : count;
};
