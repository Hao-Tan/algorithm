/**
 * question: 509. 斐波那契数
 * address: https://leetcode-cn.com/problems/fibonacci-number/
 */
export function fib(n: number): number {
    if (n === 0) {
        return 0;
    }

    if (n === 1){
        return 1;
    }

    let pre = 0;
    let curr = 1;
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        sum = pre + curr;
        pre = curr;
        curr = sum;
    }

    return curr;
}
