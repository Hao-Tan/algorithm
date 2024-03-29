/**
 * question: 496. 下一个更大元素 I
 * address: https://leetcode-cn.com/problems/next-greater-element-i/
 */
export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const res = [];
    const map = new Map();
    const stack = [];

    for (const num of nums2) {
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num);
        }

        stack.push(num);
    }

    stack.forEach((num) => {
        map.set(num, -1);
    });

    nums1.forEach((num) => {
        res.push(map.get(num));
    });

    return res;
}
