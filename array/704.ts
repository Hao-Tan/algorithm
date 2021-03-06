/**
 * question: 704. 二分查找
 * address: https://leetcode-cn.com/problems/binary-search/
 */
export function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        }
    }

    return -1;
}
