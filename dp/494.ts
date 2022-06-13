/**
 * question: 494. 目标和
 * address: https://leetcode.cn/problems/target-sum/submissions/
 */
export function findTargetSumWays(nums: number[], target: number): number {
    const dfs = (index: number, target: number) => {
        if (index === nums.length && target === 0) {
            return 1;
        }
        let res = 0;
        res += dfs(index + 1, target - nums[index]);
        res += dfs(index + 1, target + nums[index]);
        return res;
    };

    return dfs(0, target);
}
