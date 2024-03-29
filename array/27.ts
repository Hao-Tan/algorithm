/**
 * question: 27. 移除元素
 * address: https://leetcode-cn.com/problems/remove-element/
 */
export function removeElement(nums: number[], val: number): number {
    let slow = 0;
    let fast = 0;

    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return ++slow;
}
