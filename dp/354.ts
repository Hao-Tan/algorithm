/**
 * question: 354. 俄罗斯套娃信封问题
 * address: https://leetcode-cn.com/problems/russian-doll-envelopes/
 */
export function maxEnvelopes(envelopes: number[][]): number {
    const sorted = envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    const piles = [];

    for (let i = 0; i < sorted.length; i++) {
        const target = sorted[i];
        let left = 0;
        let right = piles.length;

        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (piles[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (left === piles.length) {
            piles[left] = target;
        }
    }

    return piles.length;
}
