/**
 * question: 1011. 在 D 天内送达包裹的能力
 * address: https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
 */
export function shipWithinDays(weights: number[], days: number): number {
    let left = Math.max(...weights);
    let right = weights.reduce((a, b) => a + b);

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        const time = day(weights, mid);

        if (time <= days) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

export function day(weights: number[], l: number): number {
    let d = 1;
    let sum = 0;
    for (const w of weights) {
        if (w + sum > l) {
            sum = w;
            d++;
        } else {
            sum += w;
        }
    }

    return d;
}
