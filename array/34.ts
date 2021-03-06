/**
 * question: 34. 在排序数组中查找元素的第一个和最后一个位置
 * address: https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */
export function searchRange(nums: number[], target: number): number[] {
    function findLeft(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length;

        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (target === nums[mid]) {
                right = mid;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid;
            }
        }

        if (left >= nums.length || nums[left] !== target) {
            return -1;
        }
        return left;
    }

    function findRight(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length;

        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (target === nums[mid]) {
                left = mid + 1;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid;
            }
        }

        if (right === 0 || nums[right - 1] !== target) {
            return -1;
        }
        return right - 1;
    }

    return [findLeft(nums, target), findRight(nums, target)]
}
