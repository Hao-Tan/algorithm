/**
 * question: 1024. 视频拼接
 * address: https://leetcode-cn.com/problems/video-stitching/
 */
export function videoStitching(clips: number[][], time: number): number {
    clips.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]));

    let currEnd = 0;
    let nextEnd = 0;
    let count = 0;

    let i = 0;
    while (i < clips.length && clips[i][0] <= currEnd) {
        while (i < clips.length && clips[i][0] <= currEnd) {
            nextEnd = Math.max(clips[i][1], nextEnd);
            i++;
        }

        currEnd = nextEnd;
        count++;
        if (currEnd >= time) {
            return count;
        }
    }

    return -1;
}
