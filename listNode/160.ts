/**
 * question: 160. 相交链表
 * address: https://leetcode.cn/problems/intersection-of-two-linked-lists/
 */

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const set = new Set();
    let head = headA;
    while(head) {
        set.add(head);
        head = head.next;
    }

    let temp = headB;
    while(temp) {
        if (set.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }

    return null;
};
 