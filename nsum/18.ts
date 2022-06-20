/**
 * question: 18. 四数之和
 * address: https://leetcode.cn/problems/4sum/
 */
export function fourSum(nums: number[], target: number): number[][] {
    const sorted = nums.sort((a, b) => a - b);
    const res: number[][] = [];
    for (let i = 0; i < sorted.length; i++) {
        const threeSumRes = threeSum(sorted.slice(i + 1), target - sorted[i]);
        if (threeSumRes.length) {
            for (const item of threeSumRes) {
                res.push([sorted[i], ...item]);
            }
        }

        while (i < sorted.length - 1 && sorted[i] === sorted[i + 1]) {
            i++;
        }
    }
    return res;
}

export function threeSum(nums: number[], target: number): number[][] {
    const res: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        const twoSumRes = twoSum(nums.slice(i + 1), target - nums[i]);
        if (twoSumRes.length) {
            for (const item of twoSumRes) {
                res.push([nums[i], ...item]);
            }
        }

        while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
            i++;
        }
    }
    return res;
}

export function twoSum(nums: number[], target: number): number[][] {
    const res: number[][] = [];
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const left = nums[l];
        const right = nums[r];
        const sum = left + right;
        if (sum === target) {
            while (l < r && left === nums[l]) {
                l++;
            }
            while (l < r && right === nums[r]) {
                r--;
            }
            res.push([left, right]);
        } else if (sum > target) {
            while (l < r && right === nums[r]) {
                r--;
            }
        } else if (sum < target) {
            while (l < r && left === nums[l]) {
                l++;
            }
        }
    }

    return res;
}
