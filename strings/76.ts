/**
 * question: 76. 最小覆盖子串
 * address: https://leetcode-cn.com/problems/minimum-window-substring/
 */

export function minWindow(s: string, t: string): string {
    let left = 0;
    let right = 0;
    const map = new Map();
    const tMap = new Map();
    let valid = 0;
    let start = 0;
    let len = Infinity;
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        const count = tMap.get(char) || 0;
        tMap.set(char, count + 1);
    }

    while (right < s.length) {
        const char = s[right];
        right++;

        if (tMap.has(char)) {
            const count = map.get(char) || 0;
            map.set(char, count + 1);
            if (map.get(char) === tMap.get(char)) {
                valid++;
            }
        }

        while (valid === tMap.size) {
            if (right - left < len) {
                len = right - left;
                start = left;
            }

            const head = s[left];
            left++;
            if (tMap.has(head)) {
                if (tMap.get(head) === map.get(head)) {
                    valid--;
                }
                const curr = map.get(head);
                map.set(head, curr - 1);
            }
        }
    }

    return len === Infinity ? '' : s.substr(start, len);
}
