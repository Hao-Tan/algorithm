/**
 * question: 55. 跳跃游戏
 * address: https://leetcode-cn.com/problems/jump-game/
 */
export function canJump(nums: number[]): boolean {
    let farthest = 0;
    for (let i = 0; i < nums.length; i++) {
        if (farthest >= i) {
            farthest = Math.max(farthest, i + nums[i]);
        } else {
            return false;
        }
    }

    return farthest >= nums.length - 1;
}
