/**
 * question: 45. 跳跃游戏 II
 * address: https://leetcode-cn.com/problems/jump-game-ii/
 */
export function jump(nums: number[]): number {
    const len = nums.length;
    const dp = new Array(len).fill(len);
    dp[len - 1] = 0;

    for (let i = len - 2; i >= 0; i--) {
        for (let j = 1; j <= nums[i]; j++) {
            let next = i + j >= len ? len - 1 : i + j;
            dp[i] = Math.min(dp[next] + 1, dp[i]);
        }
    }

    return dp[0];
}

export function jump2(nums: number[]): number {
    let res = 0;
    let stop = 0;

    while (stop < nums.length - 1) {
        let nextStop = [0];
        for (let i = 1; i <= nums[stop]; i++) {
            if(stop + i >= nums.length - 1) {
                return ++res;
            }
            nextStop[i] = stop + i + nums[stop + i];
        }
        stop = stop + nextStop.indexOf(Math.max(...nextStop));
        res++;
    }

    return res;
}

export function jump3(nums: number[]): number {
    let end = 0;
    let steps = 0;
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === end) {
            end = max;
            steps++;
        }
    }
    return steps;
}
