/**
 * question: 438. 找到字符串中所有字母异位词
 * address: https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 */

export function findAnagrams(s: string, p: string): number[] {
    const res: Array<number> = [];

    let left = 0;
    let right = 0;
    let valid = 0;
    const window = new Map();

    const map = new Map();
    for (let i = 0; i < p.length; i++) {
        const char = p[i];
        const count = map.get(char) || 0;
        map.set(char, count + 1);
    }

    while (right < s.length) {
        const tail = s[right];
        right++;

        if (map.has(tail)) {
            const count = window.get(tail) || 0;
            window.set(tail, count + 1);
            if (map.get(tail) === window.get(tail)) {
                valid++;
            }
        }

        while(valid === map.size) {
            if (right - left === p.length) {
                res.push(left);
            }

            const head = s[left];
            left++;

            if (map.has(head)) {
                if (map.get(head) === window.get(head)) {
                    valid--;
                }
                const curr = window.get(head);
                window.set(head, curr - 1);
            }
        }
    }

    return res;
}
