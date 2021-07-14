/**
 * question: 225. 用队列实现栈
 * address: https://leetcode-cn.com/problems/implement-stack-using-queues/
 */

export class MyStack {
    private __queue = [];

    constructor() {}

    push(x: number): void {
        const len = this.__queue.length;
        this.__queue.push(x);

        for (let i = 0; i < len; i++) {
            const head = this.__queue.shift();
            this.__queue.push(head);
        }
    }

    pop(): number {
        return this.__queue.shift();
    }

    top(): number {
        return this.__queue[0];
    }

    empty(): boolean {
        return !this.__queue.length;
    }
}
