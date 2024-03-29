/**
 * question: 141. 环形链表
 * address: https://leetcode-cn.com/problems/linked-list-cycle/
 */

export function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
};
