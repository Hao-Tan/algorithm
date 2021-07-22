/**
 * question: 3. 无重复字符的最长子串
 * address: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

export function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let right = 0;
    let maxLen = 0;
    const window = new Map();

    while (right < s.length) {
        const tail = s[right];
        right++;

        const count = window.get(tail) || 0;
        window.set(tail, count + 1);

        while (window.get(tail) > 1) {
            const head = s[left];
            left++;
            const curr = window.get(head);
            window.set(head, curr - 1);
        }

        if (right - left > maxLen) {
            maxLen = right - left;
        }
    }
    return maxLen;
}
