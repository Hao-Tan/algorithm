/**
 * question: 410. 分割数组的最大值
 * address: https://leetcode-cn.com/problems/split-array-largest-sum/
 */
export function splitArray(nums: number[], m: number): number {
    let left = Math.min(...nums);
    let right = nums.reduce((a, b) => a + b) + 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        const groups = getGroup(nums, mid);

        if (groups <= m) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

export function getGroup(nums: number[], max: number): number {
    let res = 1;
    let sum = 0;
    for (const num of nums) {
        if (num + sum > max) {
            sum = 0;
            res++;
        }
        sum += num;
    }

    return res;
}
