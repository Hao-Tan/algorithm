/**
 * question: 710. 黑名单中的随机数
 * address: https://leetcode-cn.com/problems/random-pick-with-blacklist/
 */
export class Solution {
    private __mapping = new Map();
    private __split: number;

    constructor(n: number, blacklist: number[]) {
        this.__split = n - blacklist.length;

        for (const black of blacklist) {
            this.__mapping.set(black, black);
        }

        let last = n - 1;
        for (const black of blacklist) {
            if (black >= this.__split) {
                continue;
            } else {
                while (this.__mapping.has(last)) {
                    last--;
                }
                this.__mapping.set(black, last);
                last--;
            }
        }
    }

    pick(): number {
        let index = Math.floor(Math.random() * this.__split);
        if (this.__mapping.has(index)) {
            index = this.__mapping.get(index);
        }

        return index;
    }
}
