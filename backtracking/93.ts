/**
 * question: 93. 复原 IP 地址
 * address: https://leetcode.cn/problems/restore-ip-addresses/
 */
export function restoreIpAddresses(s: string): string[] {
    const res: string[] = [];
    const dfs = (start: number, segs: number[]) => {
        if (segs.length === 4 && start === s.length) {
            res.push(segs.join('.'));
            return;
        }
        if (segs.length === 4 && start !== s.length) {
            return;
        }

        for (let i = 1; i <= 3; i++) {
            if (start + i - 1 >= s.length) {
                return;
            }
            if (s[start] === '0' && i !== 1) {
                return;
            }
            const seg = parseInt(s.substr(start, i));
            if (seg > 255) {
                return;
            }

            segs.push(parseInt(s.substr(start, i)));
            dfs(start + i, segs);
            segs.pop();
        }
    };

    dfs(0, []);

    return res;
}
