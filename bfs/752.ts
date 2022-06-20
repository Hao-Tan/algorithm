/**
 * question: 752. 打开转盘锁
 * address: https://leetcode.cn/problems/open-the-lock/
 */
function openLock(deadends: string[], target: string): number {
    const plusOne = (cur: string, i: number) => {
        const nums = cur.split('').map((num) => parseInt(num));
        if (nums[i] === 9) {
            nums[i] = 0;
        } else {
            nums[i] += 1;
        }
        return nums.join('');
    };

    const minusOne = (cur: string, i: number) => {
        const nums = cur.split('').map((num) => parseInt(num));
        if (nums[i] === 0) {
            nums[i] = 9;
        } else {
            nums[i] -= 1;
        }
        return nums.join('');
    };

    const queue = ['0000'];
    const visited = new Set(queue);
    let step = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const cur = queue.shift();
            if (target === cur) {
                return step;
            }
            if (deadends.includes(cur)) {
                continue;
            }

            for (let j = 0; j < 4; j++) {
                const minus = minusOne(cur, j);
                const plus = plusOne(cur, j);
                if (!visited.has(minus)) {
                    queue.push(minus);
                    visited.add(minus);
                }

                if (!visited.has(plus)) {
                    queue.push(plus);
                    visited.add(plus);
                }
            }
        }
        step++;
    }

    return -1;
}

console.log(openLock(['8888'], '0009'))
