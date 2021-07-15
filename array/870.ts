/**
 * question: 870. 优势洗牌
 * address: https://leetcode-cn.com/problems/advantage-shuffle/
 */
export function advantageCount(nums1: number[], nums2: number[]): number[] {
    const a = nums1.slice().sort((a, b) => b - a);
    const b = nums2.map((num, index) => [index, num]).sort((a, b) => b[1] - a[1]);
    const res = [];

    while (b.length) {
        const maxB = b.shift();
        if (a[0] > maxB[1]) {
            res[maxB[0]] = a.shift();
        } else {
            res[maxB[0]] = a.pop();
        }
    }

    return res;
}
