/**
 * question: 344. 反转字符串
 * address: https://leetcode-cn.com/problems/reverse-string/
 */

export function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}
