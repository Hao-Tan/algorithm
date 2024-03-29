/**
 * question: 435. 无重叠区间
 * address: https://leetcode-cn.com/problems/non-overlapping-intervals/
 */
export function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);
    let right = intervals[0][1];
    let res = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < right) {
            res++;
        } else {
            right = intervals[i][1];
        }
    }

    return res;
};
