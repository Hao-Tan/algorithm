/**
 * question: 739. 每日温度
 * address: https://leetcode-cn.com/problems/daily-temperatures/
 */
export function dailyTemperatures(temperatures: number[]): number[] {
    const stack = [];
    const n = temperatures.length;
    const res = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        while (
            stack.length &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const biggerDay = stack.pop();
            res[biggerDay] = i - biggerDay;
        }

        stack.push(i);
    }

    return res;
}
