/**
 * question: 875. 爱吃香蕉的珂珂
 * address: https://leetcode-cn.com/problems/koko-eating-bananas/
 */
export function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles) + 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        const time = hours(piles, mid);

        if (time <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

export function hours(piles: number[], s: number): number {
    let h = 0;
    for (let i = 0; i < piles.length; i++) {
        h += Math.floor(piles[i] / s);

        if (piles[i] % s > 0) {
            h++;
        }
    }

    return h;
}
