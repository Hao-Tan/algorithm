/**
 * question: 567. 字符串的排列
 * address: https://leetcode-cn.com/problems/permutation-in-string/
 */

 export function checkInclusion(s1: string, s2: string): boolean  {
    let left = 0;
    let right = 0;
    const window = new Map();
    const map2 = new Map();
    let valid = 0;
    let len = s1.length;

    for (let i = 0; i < len; i++) {
        const char = s1[i];
        const count = map2.get(char) || 0;
        map2.set(char, count + 1);
    }

    while (right < s2.length) {
        const char = s2[right];
        right++;

        if (map2.has(char)) {
            const count = window.get(char) || 0;
            window.set(char, count + 1);
            if (window.get(char) === map2.get(char)) {
                valid++;
            }
        }

        while (valid === map2.size) {
            if (right - left === len) {
                return true;
            }

            const head = s1[left];
            left++;

            if (map2.has(head)) {
                if (map2.get(head) === window.get(head)) {
                    valid--;
                }
                const curr = window.get(head);
                window.set(head, curr - 1);
            }
        }   
    }

    return false;
}
