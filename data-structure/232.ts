/**
 * question: 232. 用栈实现队列
 * address: https://leetcode-cn.com/problems/implement-queue-using-stacks/
 */


export class MyQueue {
    private __inStack = [];
    private __outStack = [];
    constructor() {}

    push(x: number): void {
        this.__inStack.push(x);
    }

    pop(): number {
        if (this.__outStack.length) {
            return this.__outStack.pop();
        }

        while (this.__inStack.length) {
            this.__outStack.push(this.__inStack.pop());
        }

        return this.__outStack.pop();
    }

    peek(): number {
        if (this.__outStack.length) {
            return this.__outStack[this.__outStack.length - 1];
        }

        while (this.__inStack.length) {
            this.__outStack.push(this.__inStack.pop());
        }

        return this.__outStack[this.__outStack.length - 1];
    }

    empty(): boolean {
        if (this.__inStack.length || this.__outStack.length) {
            return false;
        } else {
            return true;
        }
    }
}
