/**
 * question: 316. 去除重复字母
 * address: https://leetcode-cn.com/problems/remove-duplicate-letters/
 */

export function removeDuplicateLetters(s: string): string {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) {
            continue;
        }
        while (
            stack.length &&
            stack[stack.length - 1] > s[i] &&
            s.includes(stack[stack.length - 1], i + 1)
        ) {
            stack.pop();
        }

        stack.push(s[i]);
    }

    return stack.join('');
}
