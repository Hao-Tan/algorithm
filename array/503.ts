/**
 * question: 503. 下一个更大元素 II
 * address: https://leetcode-cn.com/problems/next-greater-element-ii/
 */
export function nextGreaterElements(nums: number[]): number[] {
    const stack = [];
    const n = nums.length;
    const res = new Array(n).fill(-1);

    for (let i = 0; i < 2 * n - 1; i++) {
        while (stack.length && nums[i % n] > nums[stack[stack.length - 1]]) {
            res[stack.pop()] = nums[i % n];
        }

        stack.push(i % n);
    }

    return res;
}
