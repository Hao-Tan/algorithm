/**
 * question: 380. O(1) 时间插入、删除和获取随机元素
 * address: https://leetcode-cn.com/problems/insert-delete-getrandom-o1/
 */
export class RandomizedSet {
    private __vals = [];
    private __valIndex = new Map();

    constructor() {}

    insert(val: number): boolean {
        if (this.__valIndex.has(val)) {
            return false;
        } else {
             this.__vals.push(val);
            this.__valIndex.set(val, this.__vals.length - 1);
            return true;
        }
    }

    remove(val: number): boolean {
        if (this.__valIndex.has(val)) {
            const lastIndex = this.__vals.length - 1;
            const last = this.__vals[lastIndex];
            const currIndex = this.__valIndex.get(val);

            // 与末尾元素交换位置
            this.__vals[currIndex] = last;
            this.__valIndex.set(last, currIndex);

            this.__valIndex.delete(val);
            this.__vals.pop();

            return true;
        } else {
            return false;
        }
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.__vals.length);
        return this.__vals[index];
    }
}
