/**
 * question: 452. 用最少数量的箭引爆气球
 * address: https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
 */
export function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);
    let right = points[0][1];
    let res = 1;

    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > right) {
            right = points[i][1];
            res++;
        }
    }

    return res;
};
