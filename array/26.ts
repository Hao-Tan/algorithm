/**
 * question: 26. 删除有序数组中的重复项
 * address: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */
export function removeDuplicates(nums: number[]): number {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length) {
        if(nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }

    return ++slow;
};
