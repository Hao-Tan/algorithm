/**
 * question: 167. 两数之和 II - 输入有序数组
 * address: https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 */

export function twoSum(numbers: number[], target: number): number[] {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        }
    }
}
