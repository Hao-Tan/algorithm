/**
 * question: 341. 扁平化嵌套列表迭代器
 * address: https://leetcode-cn.com/problems/flatten-nested-list-iterator/
 */

interface NestedInteger {
    isInteger(): boolean;
    getInteger(): number | null;
    setInteger(value: number): void;
    add(elem: NestedInteger): void;
    getList(): NestedInteger[];
}

export class NestedIterator {
    private __stack: NestedInteger[] = [];

    constructor(nestedList: NestedInteger[]) {
        this.__stack = nestedList;
    }

    hasNext(): boolean {
        while(this.__stack.length) {
            if (this.__stack[0].isInteger()) {
                return true;
            } else {
                const tmp = this.__stack.shift().getList();
                this.__stack.unshift(...tmp);
            }
        }
    }

    next(): number {
        return this.__stack.shift().getInteger();
    }
}
